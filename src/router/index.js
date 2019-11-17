import Vue from 'vue';
import VueRouter from 'vue-router';
// import welcome from '../views/welcome.vue';
import showPhoto from '../views/showPhoto.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'showPhoto',
    component: showPhoto,
  },
  // {
  //   path: '/index',
  //   name: 'index',
  //   component: () => import('../views/index'),
  //   // children: [
  //   //   {
  //   //     path: '/index/showPhoto',
  //   //     name: 'showPhoto',
  //   //     component: () => import('../views/showPhoto'),
  //   //   },
  //   // ],
  // },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
