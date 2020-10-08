import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../components/Books.vue')
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
