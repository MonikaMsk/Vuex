import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Film from '../components/Film.vue'
import People from '../views/People.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 

  {
    path: '/film/:id',
    name: 'film',
  
    component: Film,
    props: true,
  },
  {
    path: '/people',
    name: 'People',
  
    component: People
  },


]

const router = new VueRouter({
  routes
})

export default router
