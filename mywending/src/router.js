import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'home', component: ()=>import('./components/HelloWorld.vue') },
    { path: '/welcome', name: 'welcome', component: ()=>import('./pages/welcome/index.vue') },
  ]
})
