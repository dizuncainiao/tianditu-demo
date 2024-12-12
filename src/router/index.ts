import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/basic-map',
      name: 'BasicMap',
      component: () => import('../views/BasicMap.vue')
    },
    {
      path: '/add-coverings',
      name: 'AddCoverings',
      component: () => import('../views/AddCoverings.vue')
    },
    {
      path: '/circle-tool',
      name: 'CircleTool',
      component: () => import('../views/CircleTool.vue')
    }
  ]
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
