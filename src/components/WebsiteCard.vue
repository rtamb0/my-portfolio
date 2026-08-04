<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
    default: 'blue',
  },
})
</script>

<template>
  <!-- Background card -->
  <div class="flex flex-col items-center">
    <!-- Card title banner -->
    <div class="flex relative h-10">
      <!-- Left edge -->
      <div
        class="relative border-r-20 border-t-20 border-t-transparent border-b-20 border-b-transparent"
        :class="{ 'border-r-[#4a67d6]': props.colour === 'blue' }"
      ></div>
      <div
        class="flex h-10 px-10 items-center overflow-hidden"
        :class="{ 'bg-[#4a67d6]': props.colour === 'blue' }"
      >
        <h3 class="font-semibold italic text-white text-xl">{{ props.title }}</h3>
      </div>
      <!-- Right edge -->
      <div
        class="relative border-l-20 border-t-20 border-t-transparent border-b-20 border-b-transparent"
        :class="{ 'border-l-[#4a67d6]': props.colour === 'blue' }"
      ></div>
    </div>
    <!-- Detail part -->
    <div class="-mt-5 pt-10 px-5 pb-5" :class="{ 'bg-[#48438a]/80': props.colour === 'blue' }">
      <!-- Background text -->
      <div class="p-5 text-white" :class="{ 'bg-[#31409e]': props.colour === 'blue' }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
