<script setup>
import Sidebar from './components/SideBar.vue'
import Topbar from './components/TopBar.vue'
</script>

<template>
  <div id="app-layout" class="flex h-screen w-screen">
    <Sidebar id="sidebar" />
    <div id="app-content">
      <Topbar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
/* Mobile Devices (Smartphones up to 480px wide) */
@media screen and (max-width: 768px) {
  #app-layout {
    flex-direction: column;
    max-width: 100%;
  }
}

/* Laptops and Desktops (Widths 769px and above) */
@media screen and (min-width: 769px) {
  #sidebar {
    width: 12.5%;
  }
  #app-content {
    width: 87.5%;
  }
}
</style>
