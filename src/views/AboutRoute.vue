<template>
  <div class="p-10 flex-1 flex flex-col gap-5">
    <!-- Background card -->
    <div class="flex flex-col items-center">
      <!-- Card title banner -->
      <div class="flex relative h-10">
        <!-- Left edge -->
        <div class="title-left-edge border-r-[#4a67d6]"></div>
        <div class="title-banner bg-[#4a67d6]">
          <h3 class="font-semibold italic text-white text-xl">Background</h3>
        </div>
        <!-- Right edge -->
        <div class="title-right-edge border-l-[#4a67d6]"></div>
      </div>
      <!-- Detail part -->
      <div class="card-inner bg-[#48438a]/80">
        <!-- Background text -->
        <div class="text-white p-5 bg-[#31409e]">
          <p>
            Hey there! I'm Ralf, a current Computer Science student that specialises in web
            development, particularly front-end development. I enjoy creating websites that feel
            clean, responsive, and also combining design and development to build interfaces that
            are both visually appealing and practical.
          </p>
          <br />
          <p>
            Most of my experience comes from working with Vue.js and modern front-end technologies,
            where I've developed features, integrated REST APIs, and translated designs and
            requirements into functional web applications. I'm constantly learning, experimenting
            with new tools, and looking for ways to improve both my technical skills and the user
            experience of the products I build.
          </p>
          <br />
          <p>
            Other than web development, I am also interested in UI/UX design, and I enjoy exploring
            the intersection of design and development to create interfaces that are both visually
            appealing and practical.
          </p>
          <br />
          <p>
            In my portfolio, you'll find a collection of my projects that showcase my skills and
            experience.
          </p>
        </div>
      </div>
    </div>
    <!-- Skills card -->
    <div class="flex flex-col items-center">
      <!-- Card title banner -->
      <div class="flex relative h-10">
        <!-- Left edge -->
        <div class="title-left-edge border-r-[#4a67d6]"></div>
        <div class="title-banner bg-[#4a67d6]">
          <h3 class="font-semibold italic text-white text-xl">Skills</h3>
        </div>
        <!-- Right edge -->
        <div class="title-right-edge border-l-[#4a67d6]"></div>
      </div>
      <!-- Detail part -->
      <div class="card-inner flex flex-col gap-5 bg-[#48438a]/80">
        <!-- Front-end part-->
        <section class="section-part relative">
          <!-- Front-end title banner -->
          <div class="title-section flex h-10 relative left-5">
            <!-- Left edge -->
            <div class="title-left-edge border-r-[#4a67d6]"></div>
            <div class="title-banner bg-[#4a67d6]">
              <h3 class="font-semibold italic text-white text-xl">Front-end</h3>
            </div>
            <!-- Right edge -->
            <div class="title-right-edge border-l-[#4a67d6]"></div>
          </div>
          <!-- Background text -->
          <div class="text-white bg-[#31409e] -mt-5 p-5 pt-10">
            <!-- Skills list -->
            <ul class="list-disc list-inside">
              <li>Vue.js</li>
              <li>JavaScript</li>
              <li>Vue Router</li>
              <li>Pinia</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </section>
        <!-- Back-end part-->
        <section class="section-part relative">
          <!-- Back-end title banner -->
          <div class="title-section flex h-10 relative left-5">
            <!-- Left edge -->
            <div class="title-left-edge border-r-[#4a67d6]"></div>
            <div class="title-banner bg-[#4a67d6]">
              <h3 class="font-semibold italic text-white text-xl">Back-end</h3>
            </div>
            <!-- Right edge -->
            <div class="title-right-edge border-l-[#4a67d6]"></div>
          </div>
          <!-- Background text -->
          <div class="text-white bg-[#31409e] -mt-5 p-5 pt-10">
            <!-- Skills list -->
            <ul class="list-disc list-inside">
              <li>Laravel</li>
              <li>PHP</li>
              <li>REST API</li>
            </ul>
          </div>
        </section>
        <!-- Database part-->
        <section class="section-part relative">
          <!-- Database title banner -->
          <div class="title-section flex h-10 relative left-5">
            <!-- Left edge -->
            <div class="title-left-edge border-r-[#4a67d6]"></div>
            <div class="title-banner bg-[#4a67d6]">
              <h3 class="font-semibold italic text-white text-xl">Database</h3>
            </div>
            <!-- Right edge -->
            <div class="title-right-edge border-l-[#4a67d6]"></div>
          </div>
          <!-- Background text -->
          <div class="text-white bg-[#31409e] -mt-5 p-5 pt-10">
            <!-- Skills list -->
            <ul class="list-disc list-inside">
              <li>MySQL</li>
              <li>SQL Server</li>
            </ul>
          </div>
        </section>
        <!-- Tools part-->
        <section class="section-part relative">
          <!-- Tools title banner -->
          <div class="title-section flex h-10 relative left-5">
            <!-- Left edge -->
            <div class="title-left-edge border-r-[#4a67d6]"></div>
            <div class="title-banner bg-[#4a67d6]">
              <h3 class="font-semibold italic text-white text-xl">Tools</h3>
            </div>
            <!-- Right edge -->
            <div class="title-right-edge border-l-[#4a67d6]"></div>
          </div>
          <!-- Background text -->
          <div class="text-white bg-[#31409e] -mt-5 p-5 pt-10">
            <!-- Skills list -->
            <ul class="list-disc list-inside">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-left-edge {
  position: relative;
  border-right-width: 1.25rem;
  border-right-style: solid;
  border-top: 1.25rem solid transparent;
  border-bottom: 1.25rem solid transparent;
}

.title-banner {
  display: flex;
  height: 2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  align-items: center;
  overflow: hidden;
}

.title-right-edge {
  position: relative;
  border-left-width: 1.25rem;
  border-left-style: solid;
  border-top: 1.25rem solid transparent;
  border-bottom: 1.25rem solid transparent;
}

.card-inner {
  margin-top: -1.25rem;
  padding-top: 2.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1.25rem;
  width: 100%;
}

/* Mobile Devices (Smartphones up to 425px wide) */
@media screen and (max-width: 425px) {
  .section-part {
    display: flex;
    flex-direction: column;
  }
  .title-section {
    left: 0;
    text-wrap: nowrap;
    align-self: center;
  }
}
</style>
