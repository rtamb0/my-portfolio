<script setup>
import BottomBar from './components/BottomBar.vue'
import Sidebar from './components/SideBar.vue'
import Topbar from './components/TopBar.vue'
</script>

<template>
  <div id="app-layout" class="min-h-screen w-full flex flex-col">
    <Topbar class="md:sticky top-0 z-100" />
    <div id="app-content" class="flex flex-col w-full md:flex-row flex-1 mt-10 md:mt-0">
      <Sidebar
        id="sidebar"
        class="w-full md:h-[calc(100dvh-4rem-2rem)] md:w-32 md:sticky md:top-16 z-100"
      />
      <main class="flex-1 flex flex-col">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
    <BottomBar class="md:sticky bottom-0 z-100" />
  </div>
</template>

<style scoped>
/* Transition for route changes */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
</style>
