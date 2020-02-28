import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Libraries from '../views/Libraries.vue'
import Library from '../views/Library.vue'
import Reservation from '../views/Reservation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/libraries',
    name: 'Libraries',
    component: Libraries
  },
  {
    path: '/library/:libraryIndex',
    name: 'Library',
    component: Library
  },
  {
    path: '/reservation/:libraryIndex',
    name: 'Reservation',
    component: Reservation
  }
]

const router = new VueRouter({
  routes
})

export default router
