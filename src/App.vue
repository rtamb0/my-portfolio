<script setup>
import Sidebar from './components/SideBar.vue'
import Topbar from './components/TopBar.vue'
</script>

<template>
  <div id="app-layout" class="min-h-screen w-full flex flex-col">
    <Topbar class="sticky top-0 z-100" />
    <div id="app-content" class="flex flex-1">
      <Sidebar id="sidebar" class="sticky z-100" />
      <main class="flex-1 flex flex-col">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Mobile Devices (Smartphones up to 480px wide) */
@media screen and (max-width: 768px) {
  #app-content {
    flex-direction: column;
    max-width: 100%;
  }

  #sidebar {
    width: 100%;
    top: 4rem;
  }
}

/* Laptops and Desktops (Widths 769px and above) */
@media screen and (min-width: 769px) {
  #sidebar {
    top: 4rem;
    height: calc(100vh - 4rem);
    width: 8rem;
  }
}
</style>
