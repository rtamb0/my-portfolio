<script setup>
import BottomBar from './components/BottomBar.vue'
import Sidebar from './components/SideBar.vue'
import Topbar from './components/TopBar.vue'
</script>

<template>
  <div id="app-layout" class="min-h-screen w-full flex flex-col">
    <Topbar class="sticky top-0 z-100" />
    <div id="app-content" class="flex flex-1">
      <Sidebar id="sidebar" class="sticky z-100" />
      <main class="flex-1 flex flex-col">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
    <BottomBar class="sticky bottom-0 z-100" />
  </div>
</template>

<style scoped>
/* Shared layout sizes for the sticky bars */
#app-layout {
  --topbar-height: 4rem;
  --bottombar-height: 2rem;
}

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
    top: var(--topbar-height);
    height: calc(100dvh - var(--topbar-height) - var(--bottombar-height));
    width: 8rem;
  }
}

/* Transition for route changes */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
</style>
