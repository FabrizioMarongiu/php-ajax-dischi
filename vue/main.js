const app = new Vue(
    {
el: '#app',

data: {
    music: [],
    choice: '',
    artists: ['all',],
    
},
created(){
// OTTENIAMO I DATI
    // console.log(window.location)

    const dataURL = window.location.href + 'database.php?scelta=';
    

        axios
        .get(dataURL)
        .then((response) =>{
            //  console.log(response.data);
            this.music = response.data;
            this.getArtist();
        })
        .catch((error) =>{
            console.log(error);
        });
    },
    methods:{
        search(){
            console.log(this.choice);
            const dataURL = window.location.href + 'database.php?scelta=' + this.choice ;
    

            axios
            .get(dataURL)
            .then((response) =>{
                console.log(response.data);
                this.music = response.data;
            })
            .catch((error) =>{
                console.log(error);
        });
        },
        getArtist(){
            console.log(this.music);
            
                this.music.forEach(element => {
                    if(!this.artists.includes(element.author))
                    this.artists.push(element.author)}
            )
            console.log(this.artists)
        }
    }
});
