import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { layout: 'default', mainClass: 'login-view' },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: { mainClass: 'profile-view' },
    },
    {
      path: '/applications/choose-church',
      name: 'choose-church',
      component: () => import('../views/applications/ChooseChurchView.vue'),
    },
  ],
})

export default router
