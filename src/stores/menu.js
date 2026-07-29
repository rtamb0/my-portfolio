import { computed } from 'vue'
import { defineStore } from 'pinia'

const menus = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Contact Me', link: '/contact' },
]

export const useMenuStore = defineStore('menu', () => {
  const getCurrentMenu = computed(() => {
    const currentPath = window.location.pathname
    const currentMenu = menus.find((menu) => menu.link === currentPath)
    return currentMenu || null
  })

  const getMenuList = computed(() => {
    return menus
  })

  return { getCurrentMenu, getMenuList }
})
