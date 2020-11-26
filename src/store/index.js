import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    films: [],
    film: [],
  
  
  },
  mutations: {

   
    async getFilms(state) {
      state.films = [],
      
      await axios.get('https://ghibliapi.herokuapp.com/films')
      .then((result) =>{
         

result.data.forEach(element => {

         state.films.push(element)


        });

      })
      .catch((error) => {
          console.log(error)
      })
    },
    
  async getFilm(state,id) {

    state.film = []
    await   axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then((result)=>{
       
          state.film.push(result.data)
         

        })
        .catch((error)=>{
            console.log(error);
        })
  },



  },
  actions: {

    getFilms: context => {
      context.commit('getFilms')
    },

    getFilm(context,id){
      context.commit('getFilm',id)
    }

  },
  modules: {
  }
})
