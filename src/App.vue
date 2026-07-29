<script setup>
import Sidebar from './components/SideBar.vue'
import Topbar from './components/TopBar.vue'
</script>

<template>
  <div id="app-layout" class="flex flex-col h-screen w-screen">
    <Topbar />
    <div id="app-content" class="flex flex-1">
      <Sidebar id="sidebar" />
      <main class="flex-1">
        <RouterView />
      </main>
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

  #app-content {
    flex-direction: column;
    max-width: 100%;
  }
}

/* Laptops and Desktops (Widths 769px and above) */
@media screen and (min-width: 769px) {
  #sidebar {
    width: 5%;
  }
}
</style>
