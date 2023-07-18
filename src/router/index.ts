import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('@/views/RegisterView.vue')
    }, 
    {
      path:'/advancedSearch/:lon/:lat/:radius',
      name: 'advancedSearch',
      component: ()=>import('@/views/AdvancedSearchView.vue')
    }
  ]
})

export default router
