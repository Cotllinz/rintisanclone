import { createRouter, createWebHistory } from 'vue-router'

function lazyLoad(path) {
  return () => import(`../views/${path}`)
}
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: lazyLoad('Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: lazyLoad('login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  }
}) */

export default router
