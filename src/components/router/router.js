import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../module/pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: () => import('../module/pages/Contact.vue') },
  { path: '/login', component: () => import('../module/pages/LoginPage.vue') },
  { path: '/general-ranking', component: () => import('../module/pages/GeneralRanking.vue') },
  { path: '/lists', component: () => import('../module/pages/Lists.vue') },
  { path: '/create-list', component: () => import('../module/pages/CreateList.vue') },
  { path: '/user', component: () => import('../module/pages/User.vue') },
  { path: '/create-element', component: () => import('../module/pages/CreateElement.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../module/pages/NotFound404.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router