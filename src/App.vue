<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronUp } from '@lucide/vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const showScrollTop = ref(false)

function handleScroll() {
  showScrollTop.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="min-h-screen flex flex-col linux-grid selection:bg-rose-500 selection:text-white transition-colors duration-200 relative"
  >
    <Navbar />
    <main class="flex-grow">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />

    <!-- Scroll to Top Floating Button -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <button
        v-if="showScrollTop"
        class="fixed bottom-6 right-6 z-40 p-2.5 rounded-xl bg-white/90 dark:bg-[#161422]/90 backdrop-blur-md border border-zinc-200/90 dark:border-[#2f273d] text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-400 dark:hover:border-rose-500 shadow-md shadow-zinc-900/5 cursor-pointer transition-all duration-200 font-mono text-xs flex items-center gap-1"
        aria-label="Scroll to top"
        @click="scrollToTop"
      >
        <ChevronUp class="w-4 h-4" />
        <span class="text-[10px] hidden sm:inline-block">top</span>
      </button>
    </Transition>
  </div>
</template>
