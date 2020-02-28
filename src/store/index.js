import Vue from 'vue'
import Vuex from 'vuex'
import ProviderServices from '@/providerServices'
import data from '@/store/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    providerServices: new ProviderServices(process.env.VUE_APP_SERVER_HOST + process.env.VUE_APP_SERVER_LOOPBACK_ROUTES_PREFIX)
  },
  mutations: {
    
  },
  getters: {
    providerServices(state){
      return state.providerServices
    },
    userIsLogged(){
      return localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null
    },
    libraries(){
      return data.libraries
    },
    filters(){
      return data.filters
    }
  },
  actions: {

  }
})
