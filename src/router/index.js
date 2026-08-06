import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/HomeRoute.vue') },
  { path: '/about', component: () => import('../views/AboutRoute.vue') },
  { path: '/projects', component: () => import('../views/ProjectsRoute.vue') },
  { path: '/contact', component: () => import('../views/ContactRoute.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
