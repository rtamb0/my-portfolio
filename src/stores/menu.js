import { computed } from 'vue'
import { defineStore } from 'pinia'

const menus = [
  {
    name: 'Home',
    link: '/',
    description:
      'Welcome to my portfolio website! Explore my projects, learn about me, and get in touch.',
  },
  {
    name: 'About',
    link: '/about',
    description: 'Learn more about my background, skills, and experience.',
  },
  {
    name: 'Projects',
    link: '/projects',
    description: 'Check out some of my recent projects and contributions.',
  },
  {
    name: 'Contact Me',
    link: '/contact',
    description: 'Get in touch with me for collaborations or just to say hello!',
  },
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
