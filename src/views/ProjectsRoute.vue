<script setup>
import javascriptLogo from '@/assets/images/JavaScript-logo.png'
import shariaProjectImage from '@/assets/images/sharia-project.png'
import miniAcademicManagementSystemImage from '@/assets/images/mini-academic-management-system.png'
import { computed, ref } from 'vue'

const projects = ref([
  {
    name: 'Sharia Project',
    type: 'Figma',
    description:
      'A UI/UX design project created using Figma for a university project, showcasing a modern and user-friendly interface for a mobile event finder application for islamic studies.',
    projectLink:
      'https://www.figma.com/design/sig9XvJsVsZ4WakDbs3zQl/Sharia-project--Copy-?node-id=0-1&t=5gWJ94IDpxOBXJaS-1',
    repositoryLink: '',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    image: shariaProjectImage,
    selected: true,
  },
  {
    name: 'Mini Academic Management System',
    type: 'Next.JS + Express + MySQL',
    description:
      'A web application built with Next.js, Express, and MySQL that allows users to manage students, courses, and users. This application was created as a university project to demonstrate the ability to build a mini full-stack SPA (Single Page Application) application. The application is deployed with Docker on my VPS server, and can be accessed below. For login credentials, check the repository.',
    projectLink: 'http://192.236.157.35/sistem-akademik-mini/',
    repositoryLink: 'https://github.com/rtamb0/sistem-akademik-mini',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    image: miniAcademicManagementSystemImage,
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
    image: '',
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
  <div class="p-10 flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-10 flex-1">
    <!-- Portfolio list part -->
    <div class="p-5 md:col-span-1 xl:col-span-2 bg-[#883888]/80">
      <div class="flex justify-between ml-20 mr-5">
        <h5 class="text-white mb-4"><em>Project Name</em></h5>
        <h5 class="text-white mb-4"><em>Type</em></h5>
      </div>
      <ul class="text-white flex flex-col gap-5">
        <li
          v-for="project in projects"
          :key="project.name"
          class="hover:scale-102 transition flex flex-wrap items-center"
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
    <div class="p-5 flex flex-col justify-between md:col-span-1 bg-[#ffffff]/80">
      <div>
        <h2 class="text-xl font-bold text-gray-800 mb-4">{{ selectedProject?.name }}</h2>
        <p class="text-gray-600">
          {{ selectedProject?.description }}
        </p>
        <img
          v-if="selectedProject?.image"
          :src="selectedProject?.image"
          :alt="selectedProject?.name"
          class="mt-4 w-full h-auto rounded-lg"
        />
      </div>
      <div class="mt-5 flex flex-col gap-3 items-center">
        <a
          v-if="selectedProject?.projectLink"
          :href="selectedProject?.projectLink"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <a
          v-if="selectedProject?.repositoryLink"
          :href="selectedProject?.repositoryLink"
          target="_blank"
          rel="noopener noreferrer"
        >
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
