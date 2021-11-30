import { createRouter, createWebHistory } from 'vue-router'

function lazyLoad(path) {
  return () => import(`../views/${path}`)
}
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: lazyLoad('Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
