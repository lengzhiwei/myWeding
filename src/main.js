import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';
import router from './router';
import store from './store';
import 'normalize.css/normalize.css';
import App from './App.vue';
import FastClick from 'fastclick';
import './assets/baseStyle.less'
FastClick.attach(document.body);
Vue.prototype.axios = axios;
Vue.use(Vant);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
