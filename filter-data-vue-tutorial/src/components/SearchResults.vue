<script>
import titles from "../../post-data.json";
import {computed} from 'vue'
export default {
    // to get data from other components, they need to pass to the specified props
    props: {
      query: String,  
    },
    // context contains attrs, slots, and emit
    setup(props, context) {
        // method inside computed will update the computed property (filteredTitles)
        // whenever one of its dependencies changes
        const filteredTitles = computed(() => {
            return titles.filter(item => item.Name.toLowerCase().includes(props.query.toLowerCase()))
        });

        return {
            filteredTitles,
        }
    },
};
</script>

<template>
    <div class="root" v-if="query">
        <p class="status">Showing {{filteredTitles.length}} results for "{{ query }}"</p>
        <ul>
            <div class="card"><li v-for="title in filteredTitles" :key="title.Page"> {{ title.Name }}</li></div>
        </ul>
    </div>
</template>

<style>
    .status {
        display:block;
        padding-left: 50%;
        font-size: 15px;
        color:#db7093;
    }
    li {
        list-style: none;
        background-color: #ffcff1;
        border: 1px solid #d9688e
;
        border-radius: 2px;
        padding: 12px;
    }
    .root {
        padding: 5px;
    }
    .card {
        max-width: 510px;
        margin: 0 auto;
        font-size: 18px;
        
    }
</style>