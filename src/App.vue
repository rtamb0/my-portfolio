<script setup>
import Sidebar from './components/SideBar.vue'
import Topbar from './components/TopBar.vue'
</script>

<template>
  <div id="app-layout">
    <Sidebar />
    <div id="app-content">
      <Topbar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
