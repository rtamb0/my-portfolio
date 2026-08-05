<script setup>
import reactLogo from '@/assets/images/react-icon.svg'
import vueLogo from '@/assets/images/vue-js-icon.svg'
import javascriptLogo from '@/assets/images/JavaScript-logo.png'
import { computed, ref } from 'vue'

const projects = ref([
  {
    name: 'Project 1',
    type: 'React.JS',
    description:
      'A web application built with React.JS that allows users to track their tasks and manage their time effectively.',
    projectLink: '',
    repositoryLink: '',
    logo: reactLogo,
    selected: true,
  },
  {
    name: 'Project 2',
    type: 'Vue.JS',
    description:
      'A web application built with Vue.JS that provides a modern user interface for managing projects and tasks.',
    projectLink: '',
    repositoryLink: '',
    logo: vueLogo,
    selected: false,
  },
  {
    name: 'Project 3',
    type: 'JavaScript',
    description:
      'A web application built with JavaScript that allows users to collaborate on projects and share files securely.',
    projectLink: '',
    repositoryLink: '',
    logo: javascriptLogo,
    selected: false,
  },
])

const selectedProject = computed(() => projects.value.find((project) => project.selected))

const selectProject = (project) => {
  projects.value.forEach((p) => (p.selected = false))
  project.selected = true
}
</script>

<template>
  <div class="p-10 grid grid-cols-3 gap-10 flex-1">
    <!-- Portfolio list part -->
    <div class="p-5 col-span-2 bg-[#883888]/80">
      <div class="flex justify-between ml-20 mr-5">
        <h5 class="text-white mb-4"><em>Project Name</em></h5>
        <h5 class="text-white mb-4"><em>Type</em></h5>
      </div>
      <ul class="text-white flex flex-col gap-5">
        <li
          v-for="project in projects"
          :key="project.name"
          class="hover:scale-102 transition flex items-center"
          @click="selectProject(project)"
        >
          <div
            class="size-16 flex items-center justify-center outline-5 rounded-lg bg-[#fdfdfd] transition"
            :class="{
              'outline-[#da50da]': project.selected,
              'outline-[#b33ab3]': !project.selected,
            }"
          >
            <img :src="project.logo" :alt="project.type" class="size-12" />
          </div>
          <div
            class="p-3 pl-5 pr-5 flex-1 flex justify-between items-center transition"
            :class="{ 'bg-[#da50da]': project.selected, 'bg-[#b33ab3]': !project.selected }"
          >
            <div>{{ project.name }}</div>
            <div>{{ project.type }}</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- Personal details part -->
    <div class="p-5 flex flex-col justify-between col-span-1 bg-[#ffffff]/80">
      <div>
        <h2 class="text-xl font-bold text-gray-800 mb-4">{{ selectedProject?.name }}</h2>
        <p class="text-gray-600">
          {{ selectedProject?.description }}
        </p>
      </div>
      <div class="mt-5 flex flex-col gap-3 items-center">
        <a href="{{ selectedProject?.projectLink }}" target="_blank" rel="noopener noreferrer">
          <button class="flex h-10 relative hover:scale-105 transition">
            <!-- Left edge -->
            <div class="button-left-edge border-r-[#4a67d6]"></div>
            <div class="button-content bg-[#4a67d6]">
              <h3 class="font-semibold italic text-white text-xl">View Project</h3>
            </div>
            <!-- Right edge -->
            <div class="button-right-edge border-l-[#4a67d6]"></div>
          </button>
        </a>
        <a href="{{ selectedProject?.repositoryLink }}" target="_blank" rel="noopener noreferrer">
          <button class="flex h-10 relative hover:scale-105 transition">
            <!-- Left edge -->
            <div class="button-left-edge border-r-[#4a67d6]"></div>
            <div class="button-content bg-[#4a67d6]">
              <h3 class="font-semibold italic text-white text-xl">View Repository</h3>
            </div>
            <!-- Right edge -->
            <div class="button-right-edge border-l-[#4a67d6]"></div>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-left-edge {
  position: relative;
  border-right-width: 1.25rem;
  border-right-style: solid;
  border-top: 1.25rem solid transparent;
  border-bottom: 1.25rem solid transparent;
}

.button-content {
  display: flex;
  height: 2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  align-items: center;
  overflow: hidden;
}

.button-right-edge {
  position: relative;
  border-left-width: 1.25rem;
  border-left-style: solid;
  border-top: 1.25rem solid transparent;
  border-bottom: 1.25rem solid transparent;
}
</style>
