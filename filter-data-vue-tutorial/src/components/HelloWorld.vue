<script>
import { ref } from 'vue'
import SearchResults from './SearchResults.vue'


export default {
    // to use components, you have to declare inside components
    components: {
        SearchResults,
    },
    // runs when component is created
    // where all reactive data, computed properties, methods, etc are defined that will be used by component
    // anything this method returns is made accessible to template
    setup(){
        const query = ref("")

        const reset = () => {
            query.value = ""
        }

        return {query, reset};
    }
}
  
</script>

<template>
    <div>
        <h2>Filter LearnVue Articles</h2>
        <input type="text"  placeholder="Filter search..." 
        v-model="query" 
        v-on:keyup.enter="reset"/>
        <button @click="reset">Reset</button>
        <search-results :query="query"/>
    </div>
</template>

<style>
    *, *:before, *:after {
        box-sizing: border-box;
    }
    input[type=text] {
        margin:0 auto;
        margin-bottom: 30px;
        padding: 10px;
        display:block;
        border: 3px solid darkslategrey;
        border-radius: 5px;
        box-shadow: 10px 5px 5px 0px #ffcff1;
        font-family: monospace;
    }
    button {
        padding:8px;
        border: 2px solid #db7093;
        border-radius: 5px;
        font-family: monospace;
        color: darkblue;
    }
    button:hover {
        background-color: #cf6ba9;
        color: white;
    }

</style>