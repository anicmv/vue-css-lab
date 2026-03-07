import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 页面元信息，首页会用到
export const pages = [
  { path: '/expandingcards', name: 'ExpandingCards', title: '可扩展卡片', component: () => import('../views/ExpandingCardsView.vue') },
  { path: '/progresssteps', name: 'ProgressSteps', title: '进度步骤', component: () => import('../views/ProgressSteps.vue') },
]

const routes = [
  { path: '/', name: 'Home', component: Home },
  ...pages.map(p => ({
    path: p.path,
    name: p.name,
    component: p.component,
  })),
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
