<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="flex h-16 w-full">
    <!-- First section  -->
    <div class="banner-1 relative z-30 flex basis-[9%] shrink-0 items-center justify-center">
      <HomeIcon class="h-8 w-8 text-white" />
    </div>

    <!-- Transition from banner 1 to banner 2 -->
    <div class="relative z-30 w-0 shrink-0">
      <div
        class="banner-1-end absolute left-0 top-0 h-0 w-0 border-b-32 border-l-32 border-t-32 border-b-transparent border-t-transparent"
      ></div>

      <div
        class="banner-2-start absolute left-0 top-0 h-0 w-0 border-b-32 border-l-32 border-t-32 border-l-transparent"
      ></div>
    </div>

    <!-- Second section -->
    <div class="banner-2 relative z-20 flex basis-[37%] shrink-0 items-center justify-center pl-10">
      <h2 class="text-white text-xl">Home</h2>
    </div>

    <!-- Transition from banner 2 to banner 3 -->
    <div class="relative z-20 w-0 shrink-0">
      <div
        class="banner-2-end absolute left-0 top-0 h-0 w-0 border-b-32 border-l-32 border-t-32 border-b-transparent border-t-transparent"
      ></div>

      <div
        class="banner-3-start absolute left-0 top-0 h-0 w-0 border-b-32 border-l-32 border-t-32 border-l-transparent border-b-transparent"
      ></div>
    </div>

    <!-- Third section% -->
    <div class="banner-3 h-1/2 relative z-10 flex min-w-0 flex-1 items-center pl-10">
      <div class="text-white">About me.</div>
    </div>
  </div>
</template>

<style scoped>
.banner-1 {
  background-color: #6379c6;
}

.banner-1-end {
  border-left-color: #6379c6;
}

.banner-2 {
  background-color: #99aeda;
}

.banner-2-start {
  border-top-color: #99aeda;
  border-bottom-color: #99aeda;
}

.banner-2-end {
  border-left-color: #99aeda;
}

.banner-3 {
  background-color: #6361c6;
}

.banner-3-start {
  border-top-color: #6361c6;
}
</style>
