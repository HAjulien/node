 let demo =  new Vue ({
    el: '#demo',
    data: {
        show : true
    }
})


let app1 = new Vue ({
    el: '#app-1',
    data:{
        message:'Hello Vue.js'
    }
})

let app2 = new Vue ({
    el: '#app-2',
    data:{
        message:'Hello Vue.js'
    }
})

let app3 = new Vue ({
    el: '#app-3',
    data:{
        seen: true
    }
})

const stock = new Vue({
    el: '#app',
    data:{
        product:'New Balance'
    }
})

const app5 = new Vue({
    el: '#app-5',
    data:{
        products:[]
    },
    mounted(){
        axios
        .get('products.json')
        .then(response=>(this.products= response.data.products))
    }
})

