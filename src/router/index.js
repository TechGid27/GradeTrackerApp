import GradesView from '@/view/GradesView.vue'
import MainView from '@/view/MainView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      { path: '/', component: MainView },
      { path: '/grades', component: GradesView },

  ],
})

export default router
