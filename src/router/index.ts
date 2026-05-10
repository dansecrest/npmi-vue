import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { layout: 'default' },
    },
    {
      path: '/application/choose-church',
      name: 'choose-church',
      component: () => import('../views/application/ChooseChurchView.vue'),
    },
  ],
})

export default router
