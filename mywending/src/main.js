import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false
Vue.config.productionTip = false
// import animate from 'animate.css
import router from './router'
Vue.prototype.axios = axios
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
