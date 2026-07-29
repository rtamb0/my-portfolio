<script setup>
import { useMenuStore } from '@/stores/menu'
import { ref } from 'vue'

const menuStore = useMenuStore()
const menus = ref(menuStore.getMenuList)
</script>

<template>
  <nav class="p-15 pt-10 button-wrapper">
    <ul id="button-wrapper" class="flex flex-col items-center gap-10">
      <li
        v-for="menu in menus"
        :key="menu.name"
        class="h-16 w-16 rotate-45 button-color button-border"
      >
        <RouterLink :to="menu.link" class="flex h-full w-full items-center justify-center">
          <span class="block whitespace-nowrap button-text text-white -rotate-55">
            {{ menu.name }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Mobile Devices (Smartphones up to 480px wide) */
@media screen and (max-width: 768px) {
  #button-wrapper {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}

.button-text {
  text-shadow:
    rgb(102, 154, 237) 2px 0px 0px,
    rgb(102, 154, 237) 1.75517px 0.958851px 0px,
    rgb(102, 154, 237) 1.0806px 1.68294px 0px,
    rgb(102, 154, 237) 0.141474px 1.99499px 0px,
    rgb(102, 154, 237) -0.832294px 1.81859px 0px,
    rgb(102, 154, 237) -1.60229px 1.19694px 0px,
    rgb(102, 154, 237) -1.97998px 0.28224px 0px,
    rgb(102, 154, 237) -1.87291px -0.701566px 0px,
    rgb(102, 154, 237) -1.30729px -1.5136px 0px,
    rgb(102, 154, 237) -0.421592px -1.95506px 0px,
    rgb(102, 154, 237) 0.567324px -1.91785px 0px,
    rgb(102, 154, 237) 1.41734px -1.41108px 0px,
    rgb(102, 154, 237) 1.92034px -0.558831px 0px;
}

.button-border {
  border: 8px solid #90adeb;
}

.button-color {
  background-color: #466dcd;
}

.button-wrapper {
  background-color: rgba(84, 178, 242, 0.7);
}
</style>
