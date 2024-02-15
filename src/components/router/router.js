import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../module/pages/Home.vue'

const routes = [
  { path: '/', 
    name: 'home', 
    component: Home 
  },
  { path: '/contact', 
    name: 'contact',
    component: () => import('../module/pages/Contact.vue') 
  },
  { path: '/login', 
    name: 'login',
    component: () => import('../module/pages/LoginRegister.vue') 
  },
  { path: '/general-ranking', 
    name: 'general-ranking',
    component: () => import('../module/pages/GeneralRanking.vue') 
  },
  { path: '/lists', 
    name: 'lists',
    component: () => import('../module/pages/Lists.vue') 
  },
  { path: '/create-list', 
    name: 'create-list',
    component: () => import('../module/pages/CreateList.vue') 
  },
  { path: '/user', 
    name: 'user',
    component: () => import('../module/pages/User.vue') 
  },
  { path: '/create-element', 
    name: 'create-element',
    component: () => import('../module/pages/CreateElement.vue') 
  },
  { path: '/:pathMatch(.*)*', 
    name: 'not-found',
    component: () => import('../module/pages/NotFound404.vue') 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router