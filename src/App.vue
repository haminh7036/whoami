<script setup>
import { onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { useNavigation } from './composables/useNavigation.js'

const { activeChapter, mountNavigation, unmountNavigation } = useNavigation()

onMounted(() => {
  mountNavigation()
})

onUnmounted(() => {
  unmountNavigation()
})
</script>

<template>
  <div
    class="h-dvh w-screen overflow-hidden flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--accent-primary)] selection:text-white transition-colors duration-200"
  >
    <Navbar />

    <!-- Horizontal Single-Viewport Chapter Track -->
    <main class="flex-1 min-h-0 w-screen overflow-hidden relative">
      <div
        data-testid="chapter-track"
        class="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        :style="{ transform: `translateX(-${activeChapter * 100}vw)` }"
      >
        <div class="w-screen h-full shrink-0 overflow-y-auto no-scrollbar chapter-scroll-area">
          <Hero />
        </div>
        <div class="w-screen h-full shrink-0 overflow-y-auto no-scrollbar chapter-scroll-area">
          <About />
        </div>
        <div class="w-screen h-full shrink-0 overflow-y-auto no-scrollbar chapter-scroll-area">
          <Projects />
        </div>
        <div class="w-screen h-full shrink-0 overflow-y-auto no-scrollbar chapter-scroll-area">
          <Skills />
        </div>
        <div class="w-screen h-full shrink-0 overflow-y-auto no-scrollbar chapter-scroll-area">
          <Contact />
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
