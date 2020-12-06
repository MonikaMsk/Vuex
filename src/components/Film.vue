<template>
        <div>
            
        <h3>Film's info</h3>
        <div class="film">
        <div >
            <div class="text">
          <h3>  Title: {{film.title}} </h3>
          <h3> Director: {{film.director}}</h3> 
           <h4> {{film.description}} </h4>
        </div>
        </div>
</div>
     </div>
       
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Film',
    props: ['id'],
    

    computed: mapState(['film']),


mounted(){
     this.$store.dispatch('getFilm', this.id)
}
  
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