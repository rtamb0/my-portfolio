<template>
  <div class="flex h-full min-h-0 flex-col overflow-hidden">
    <!-- Introduction card -->
    <div class="mt-15 flex h-1/4 shrink-0 items-center bg-[#40bedf]/50">
      <div class="flex h-1/2 flex-1 items-center bg-[#2b4866] text-center">
        <h3 class="m-10 flex-1 text-3xl text-white">Hello! My name is...</h3>
      </div>
    </div>

    <!-- Character area -->
    <div class="relative min-h-0 flex-1">
      <div class="absolute inset-x-0 -top-12 bottom-0 z-10">
        <img
          src="/src/assets/images/placeholder_person.png"
          alt=""
          class="absolute inset-0 size-full object-contain object-bottom"
        />

        <!-- Complete name banner -->
        <div class="absolute bottom-[15%] left-1/2 z-20 -translate-x-1/2">
          <div class="flex items-center">
            <!-- Logo diamond -->
            <div
              class="relative z-30 -mr-10 flex size-24 rotate-45 items-center justify-center bg-[#bb40bc]"
            >
              <div class="flex size-18 items-center justify-center bg-white">
                <img
                  src="/src/assets/images/vue-js-icon.svg"
                  alt="Vue.js Logo"
                  class="ms-2 mt-2 size-14 -rotate-45"
                />
              </div>
            </div>

            <!-- Main banner rectangle -->
            <div
              class="relative z-10 flex h-24 w-[clamp(18rem,38vw,30rem)] items-center bg-[#bb40bc] pl-20 pr-5"
            >
              <!-- Job-title banner -->
              <div class="absolute bottom-[calc(100%+0.3rem)] right-0 left-0">
                <div class="flex relative h-8 w-full">
                  <!-- Left edge -->
                  <div
                    class="relative border-r-16 border-t-16 border-t-transparent border-b-16 border-b-transparent border-r-[#614461]"
                  ></div>

                  <!-- Job-title body -->
                  <div
                    class="banner-mini-shape flex w-full items-center overflow-hidden bg-[#614461] pl-4"
                  >
                    <h1
                      class="min-w-0 flex-1 truncate text-[clamp(0.75rem,2.2vw,1.125rem)] font-semibold italic text-white"
                    >
                      Front-end Web Developer
                    </h1>
                  </div>
                </div>
              </div>

              <!-- Name -->
              <h1 class="whitespace-nowrap text-2xl text-white">John Smith</h1>
            </div>

            <!-- Main banner arrow -->
            <div class="relative z-10 w-0 shrink-0">
              <div
                class="size-0 border-y-48 border-l-48 border-y-transparent border-l-[#bb40bc]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-mini-shape {
  clip-path: polygon(0 0, calc(100% - 2rem) 0, 100% 100%, 0 100%);
}
</style>
