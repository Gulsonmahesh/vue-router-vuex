import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../components/Books.vue'),
    beforeEnter: async (to, from, next) => {
      await store.dispatch('getbook');      
      next();
    }
  },
  {
    path: '/viewbook/:bookid',    
    name: 'Viewbook',
    component: () => import('../components/Viewbook.vue'),
    props: { default: true },
    beforeEnter: async (to, from, next) => {
      let bookid = (to.params.bookid);
      await store.dispatch('getbook', {bookid});
      next();
    }
  },
  {
    path: '/addbook',
    name: 'Addbook',
    component: () => import('../components/Bookform.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
