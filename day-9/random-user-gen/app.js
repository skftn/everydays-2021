const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@email.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser(){

            const res = await fetch('https://randomuser.me/api/')
            const data = await res.json();
            const user = await data.results[0];
            console.log('the data: ', user)
            this.firstName =  user.name.first
            this.lastName = user.name.last
            this.email = user.email
            this.gender = user.gender
            this.picture = user.picture.large
        }
    }
})

app.mount('#app')