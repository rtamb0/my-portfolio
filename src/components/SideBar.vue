<script setup>
import { ref } from 'vue'

const menus = ref([
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Contact', link: '/contact' },
])
</script>

<template>
  <div class="p-4">
    <ul class="flex flex-col gap-10">
      <li
        v-for="menu in menus"
        class="w-16 h-16 rotate-45 text-center py-2 bg-gray-200"
        :key="menu.name"
      >
        <a :href="menu.link" class="-rotate-60 mt-3 block">{{ menu.name }}</a>
      </li>
    </ul>
  </div>
</template>
