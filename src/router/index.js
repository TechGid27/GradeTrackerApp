import Dashboard from '@/view/MainDashboard.vue'
import MainView from '@/view/MainView.vue'
import SubjectsView from '@/view/SubjectsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      { path: '/', name:"View", component: MainView },
      { path: '/dashboard',name:"Dashboard", component: Dashboard },
      { path: '/subjects',name:"Subjects", component: SubjectsView},

  ],
})

export default router
