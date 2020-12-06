<template>
    <div class="character">
        <h4>Find your character</h4>
<div class="search-box">
         <input 
        type="text"
        class="search-bar"
        placeholder="Type in name e.g. Moro"
        v-model="search"
       />
       <button class="btn" @click="getCharacter">Search</button>
</div>
       <br><br><br>

<div class="output" v-for="c in character" :key="c.id">
   <h3> {{c.name}} </h3>
   Gender: {{c.gender}}<br>
   Age: {{c.age}} <br>
   Eyes: {{c.eye_color}}
</div>

<br>
<br>
     

       

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'People',

    data(){
        return {
            character: [],
            search: ''
        }
    },

    

    methods: {

     async getCharacter(){
             if(this.search){
                await axios.get(`https://ghibliapi.herokuapp.com/people?q=${this.search}`)
                
                .then((result) =>{
                    console.log(result.data)


                    result.data.forEach(element => {
                      this.character.push(element)
                      this.search=""

                   

        });

                })
                .catch((error) => {
                    console.log(error)
                })
             } else {
                 alert("Type in a character's name")
             } 
        }
    },
    
}
</script>

<style >
body {
    background-image: url('https://studioghiblimovies.com/wp-content/uploads/2019/02/HTB16Q2WQFXXXXaeXXXXq6xXFXXX4.jpg')
}


 .search-bar {

margin: 10 px;
  font-size: 20px;
  text-align: center;
}

.btn {
    margin-left: 10px;
    font-size: 15px;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}

.output {
    background-color:palegreen;
    opacity: 0.9;
    margin-left: 400px;
    margin-right: 400px;
    
  
}

</style>