<script setup>
import { useMenuStore } from '@/stores/menu'
import { HomeIcon, PhoneIcon, StarIcon, UserIcon } from '@heroicons/vue/24/outline'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const menuStore = useMenuStore()

const currentMenu = computed(() => {
  return menuStore.getCurrentMenu
})

const bannerContainer = ref(null)
const thirdBannerText = ref(null)

let resizeObserver = null

const checkTextWrapping = () => {
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

const updateTriangleSize = () => {
  const el = bannerContainer.value
  if (!el) return

  const height = el.offsetHeight
  const triangleSize = height / 2

  el.style.setProperty('--triangle-size', `${triangleSize}px`)
}

watch(
  () => currentMenu.value?.description,
  async () => {
    await nextTick()

    checkTextWrapping()
    updateTriangleSize()
  },
)

onMounted(() => {
  if (bannerContainer.value) {
    resizeObserver = new ResizeObserver(() => {
      checkTextWrapping()
      updateTriangleSize()
    })

    resizeObserver.observe(bannerContainer.value)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})
</script>

<template>
  <div ref="bannerContainer" class="flex h-full w-full md:h-16">
    <!-- First section -->
    <div class="banner-1 relative flex basis-[9%] shrink-0 items-center justify-center">
      <HomeIcon v-if="currentMenu?.name === 'Home'" class="relative z-20 h-8 w-8 text-white" />

      <UserIcon
        v-else-if="currentMenu?.name === 'About'"
        class="relative z-20 h-8 w-8 text-white"
      />

      <StarIcon
        v-else-if="currentMenu?.name === 'Projects'"
        class="relative z-20 h-8 w-8 text-white"
      />

      <PhoneIcon
        v-else-if="currentMenu?.name === 'Contact'"
        class="relative z-20 h-8 w-8 text-white"
      />
    </div>

    <!-- Transition from banner 1 to banner 2 -->
    <div class="relative z-10 h-full w-0 shrink-0">
      <div class="banner-1-end"></div>
    </div>

    <!-- Second section -->
    <div class="banner-2 relative flex basis-[37%] shrink-0 items-center justify-center pl-10">
      <h1 class="relative z-20 text-xl text-white">
        {{ currentMenu?.name }}
      </h1>
    </div>

    <!-- Transition from banner 2 to banner 3 -->
    <div class="relative z-10 h-full w-0 shrink-0">
      <div class="banner-2-end"></div>
    </div>

    <!-- Third section -->
    <div class="banner-3 banner-3-container relative flex h-1/2 min-w-0 flex-1 items-center pl-10">
      <h2 ref="thirdBannerText" class="relative z-20 text-white">
        {{ currentMenu?.description }}
      </h2>
    </div>
  </div>
</template>

<style scoped>
.banner-1 {
  background-color: #6379c6;
}

.banner-1-end {
  position: absolute;
  left: 0;
  top: 0;

  width: 0;
  height: 0;

  border-top: var(--triangle-size) solid transparent;
  border-bottom: var(--triangle-size) solid transparent;
  border-left: var(--triangle-size) solid #6379c6;
}

.banner-2 {
  background-color: #99aeda;
}

.banner-2-end {
  position: absolute;
  left: 0;
  top: 0;

  width: 0;
  height: 0;

  border-top: var(--triangle-size) solid transparent;
  border-bottom: var(--triangle-size) solid transparent;
  border-left: var(--triangle-size) solid #99aeda;
}

.banner-3 {
  background-color: #6361c6;
}
</style>
