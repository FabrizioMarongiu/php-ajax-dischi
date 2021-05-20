const app = new Vue(
    {
el: '#app',

data: {
    music: [],
    
},
created(){
// OTTENIAMO I DATI
    console.log(window.location)

    const dataURL = window.location.href + 'database.php';
    

        axios
        .get(dataURL)
        .then((response) =>{
            console.log(response.data);
            this.music = response.data;
        })
        .catch((error) =>{
            console.log(error);
        });
    }
});