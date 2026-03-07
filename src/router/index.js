import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 页面元信息，首页会用到
export const pages = [
  { path: '/expandingcards', name: 'ExpandingCards', title: '可扩展卡片', component: () => import('../views/ExpandingCardsView.vue') },
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
  history: createWebHashHistory(),
  routes,
})

export default router
