import { createRouter, createWebHistory } from 'vue-router'
import GuidesView from '../views/GuidesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/guider' },
    { path: '/guider', name: 'guides', component: GuidesView },
    {
      path: '/guider/:slug',
      name: 'guide',
      component: () => import('../views/GuideDetailView.vue'),
    },
  ],
})

export default router
