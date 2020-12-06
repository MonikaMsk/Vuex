import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    films: [],
    film: null,
  
  
  },
  mutations: {

    SET_FILMS(state,films){
      state.films = films
    },


  SET_FILM(state, film){
    state.film = film
  }

  },
  actions: {


  async getFilms({commit}){
    await axios.get('https://ghibliapi.herokuapp.com/films')
    .then((result) =>{
      commit('SET_FILMS', result.data)

      })
      .catch((error) => {
          console.log(error)
      })
  },


async getFilm({commit}, id){
  await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
  .then((result) =>{
    commit('SET_FILM', result.data)

    })
    .catch((error) => {
        console.log(error)
    })
}
 

  },
  modules: {
  }
})
