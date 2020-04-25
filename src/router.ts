import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/bio',
    name: 'bio',
    component: () => import('@/views/Bio.vue'),
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('@/views/Work.vue'),
  },
  {
    path: '*',
    name: 'page not found',
    component: () => import('@/views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;
