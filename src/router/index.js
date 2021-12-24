import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'

const AsyncRoute = (name) => {
  return () => import('../views/' + name + '.vue')
}

const routes = [
  {
    path: '/homePage',
    name: 'HomePage',
    component: AsyncRoute('Home'),

    meta: { requiresAuth: true, requiresHR: true }
  },
  {
    path: '/',
    name: 'Login',
    component: AsyncRoute('login'),
    meta: { requiresVisitor: true }
  },
  {
    path: '/homeHr',
    name: 'HomeHR',
    component: AsyncRoute('HomeHr'),
    meta: { requiresAuth: true, requiresVendor: true }
  },
  {
    path: '/notAuth',
    name: 'notAuth',
    component: AsyncRoute('notAuth')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.getters.isLogin) {
      next({
        name: 'Login',
        replace: true
      })
    } else {
      if (to.meta.requiresHR) {
        if (store.getters.isHR) {
          next()
        } else {
          next({
            name: 'notAuth'
          })
        }
      } else if (to.meta.requiresVendor) {
        if (store.getters.requiresVendor) {
          next()
        } else {
          next({
            name: 'notAuth'
          })
        }
      } else {
        next({
          name: 'Login',
          replace: true
        })
      }
    }
  } else if (to.meta.requiresVisitor) {
    if (store.getters.isLogin) {
      next({
        name: 'HomePage',
        replace: true
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
