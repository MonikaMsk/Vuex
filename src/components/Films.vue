<template>
  <div>
<h1>{{title}}</h1>

    <div class="container">
      <div class="field" v-for="film in films" :key="film.id">
        <router-link :to="{ name: 'film', params: { id: film.id } }">
          <h3>{{ film.title }}</h3></router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Films",

  props: ['title'],

 computed: mapState(['films']),

  mounted() {
    this.$store.dispatch("getFilms");
  },
};
</script>

<style scoped>

.container {
  display: grid;
  margin-left: 360px;
  grid-template-columns: 200px 200px 200px;
  grid-gap: 10px;
 
 
}

.field {
  text-align: center;
  background-color: yellowgreen;
  min-height: 200px;
  max-width: 300px;

 
}

.field h3 {
  color: floralwhite;
  margin-top: 50px;
}

a {
  text-decoration: none;
}
</style>

