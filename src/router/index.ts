import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

routes.unshift({
  path: '/',
  redirect: '/home'
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  const { title } = to.meta as Record<string, any>
  title && (document.title = title)
  next()
})

export default router
