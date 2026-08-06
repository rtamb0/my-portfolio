<script setup>
import { useMenuStore } from '@/stores/menu'
import { HomeIcon, PhoneIcon, StarIcon, UserIcon } from '@heroicons/vue/24/outline'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

const menuStore = useMenuStore()

const currentMenu = computed(() => {
  return menuStore.getCurrentMenu
})

const thirdBannerText = ref(null)
let resizeObserver = null

const checkTextWrapping = () => {
  // Resize the third banner height based on whether the text wraps or not

  const el = thirdBannerText.value
  if (!el || !el.parentElement) return

  el.style.whiteSpace = 'nowrap'
  const singleLineHeight = el.clientHeight

  el.style.whiteSpace = ''
  const currentHeight = el.clientHeight

  if (currentHeight > singleLineHeight) {
    el.parentElement.classList.remove('h-1/2')
  } else {
    el.parentElement.classList.add('h-1/2')
  }
}

watch(
  () => currentMenu.value?.description,
  async () => {
    await nextTick()
    checkTextWrapping()
  },
)

// Track browser window resizes in real-time
onMounted(() => {
  if (thirdBannerText.value) {
    resizeObserver = new ResizeObserver(() => {
      checkTextWrapping()
    })
    resizeObserver.observe(thirdBannerText.value)
  }
})
</script>

<template>
  <div class="flex h-16 w-full">
    <!-- First section  -->
    <div class="banner-1 relative z-30 flex basis-[9%] shrink-0 items-center justify-center">
      <HomeIcon v-if="currentMenu?.name === 'Home'" class="h-8 w-8 text-white" />
      <UserIcon v-else-if="currentMenu?.name === 'About'" class="h-8 w-8 text-white" />
      <StarIcon v-else-if="currentMenu?.name === 'Projects'" class="h-8 w-8 text-white" />
      <PhoneIcon v-else-if="currentMenu?.name === 'Contact'" class="h-8 w-8 text-white" />
    </div>

    <!-- Transition from banner 1 to banner 2 -->
    <div class="relative z-30 w-0 shrink-0">
      <div
        class="banner-1-end absolute left-0 top-0 h-0 w-0 border-b-32 border-l-32 border-t-32 border-b-transparent border-t-transparent"
      ></div>
    </div>

    <!-- Second section -->
    <div class="banner-2 relative z-20 flex basis-[37%] shrink-0 items-center justify-center pl-10">
      <h1 class="text-white text-xl">{{ currentMenu?.name }}</h1>
    </div>

    <!-- Transition from banner 2 to banner 3 -->
    <div class="relative z-20 w-0 shrink-0">
      <div
        class="banner-2-end absolute left-0 top-0 h-0 w-0 border-b-32 border-l-32 border-t-32 border-b-transparent border-t-transparent"
      ></div>
    </div>

    <!-- Third section% -->
    <div
      class="banner-3 banner-3-container h-1/2 relative z-10 flex min-w-0 flex-1 items-center pl-10"
    >
      <h2 ref="thirdBannerText" class="text-white">{{ currentMenu?.description }}</h2>
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

.banner-2-end {
  border-left-color: #99aeda;
}

.banner-3 {
  background-color: #6361c6;
}
</style>
