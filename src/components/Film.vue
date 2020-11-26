<template>
        <div>
            
        <h3>Film's info</h3>
        <div class="film">
        <div v-for="f in film" :key="f.id">
            <div class="text">
          <h3>  Title: {{f.title}} </h3>
          <h3> Director: {{f.director}}</h3> 
           <h4> {{f.description}} </h4>
        </div>
        </div>
</div>
     </div>
       
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Film',
    

    computed: {
        ...mapState({
            film: state => state.film,
            
        })
    },

mounted(){
    this.$store.dispatch('getFilm', this.$route.params.id)
   console.log(this.$route.params.id)
},

  
}
</script>

<style scoped >

.film {
  display: grid;
  margin-left: 300px;
  margin-right: 350px;
  background-color: greenyellow;
  opacity: 0.7;
  height: 450px;
}

.text {
    font-weight:700;
    color:black;


    
}


</style>