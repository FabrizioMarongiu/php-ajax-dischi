const app = new Vue(
    {
el: 'app',

data: {
    api: [],
    
},
created(){
        axios.get(this.api)
        .then(response =>{
            console.log(response.data);
        })
        .catch(error =>{
            console.log(error);
        });
    }
});