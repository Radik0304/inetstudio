import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import createStore from './store'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = createStore()

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
