import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/HomeRoute.vue') },
  { path: '/about', component: () => import('../views/AboutRoute.vue') },
  { path: '/projects', component: () => import('../views/ProjectsRoute.vue') },
  { path: '/contact', component: () => import('../views/ContactRoute.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
