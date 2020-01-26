import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Bio from '../views/Bio.vue';
import Work from '../views/Work.vue';
import PageNotFound from '../views/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/bio',
    name: 'bio',
    component: Bio,
  },
  {
    path: '/work',
    name: 'work',
    component: Work,
  },
  {
    path: '*',
    name: 'page not found',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;
