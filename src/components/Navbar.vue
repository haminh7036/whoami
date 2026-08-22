<script setup>
import { ref } from 'vue'
import { Terminal, Sun, Moon, Menu, X } from '@lucide/vue'
import { useI18n } from '../composables/useI18n.js'
import { useTheme } from '../composables/useTheme.js'
import GithubIcon from './icons/GithubIcon.vue'

const { t } = useI18n()
const { theme, toggleTheme } = useTheme()

const isOpen = ref(false)
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0e0d14]/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-[#2f273d] transition-colors duration-200"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Brand / Prompt -->
      <a
        href="#"
        class="flex items-center gap-2 font-mono text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 hover:opacity-85 transition-opacity"
      >
        <span
          class="p-1 rounded-md bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-rose-600 dark:text-rose-400"
        >
          <Terminal class="w-4 h-4" />
        </span>
        <span class="tracking-tight">~/whoami</span>
      </a>

      <!-- Desktop Nav -->
      <nav
        class="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300 font-mono"
      >
        <a href="#about" class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          {{ t.nav.about }}
        </a>
        <a href="#projects" class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          {{ t.nav.projects }}
        </a>
        <a href="#skills" class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          {{ t.nav.skills }}
        </a>
        <a
          href="#experience"
          class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
        >
          {{ t.nav.experience }}
        </a>
        <a href="#contact" class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          {{ t.nav.contact }}
        </a>
      </nav>

      <!-- Actions: Theme & GitHub -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Theme Switcher -->
        <button
          class="p-2 rounded-lg bg-zinc-100 dark:bg-[#161422] border border-zinc-200 dark:border-[#2f273d] text-zinc-700 dark:text-zinc-300 hover:border-rose-400 dark:hover:border-rose-500 cursor-pointer transition-colors"
          :aria-label="'Toggle theme, current: ' + theme"
          @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" class="w-4 h-4 text-rose-400" />
          <Moon v-else class="w-4 h-4 text-zinc-700" />
        </button>

        <!-- GitHub Profile -->
        <a
          href="https://github.com/haminh7036"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 text-white dark:bg-[#1f1b2e] dark:text-zinc-200 border border-transparent dark:border-[#2f273d] hover:bg-zinc-800 dark:hover:bg-[#2d2742] cursor-pointer transition-colors"
        >
          <GithubIcon class="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          class="md:hidden p-2 rounded-lg text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-[#161422] cursor-pointer"
          aria-label="Toggle navigation menu"
          @click="isOpen = !isOpen"
        >
          <Menu v-if="!isOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="isOpen"
      class="md:hidden bg-white dark:bg-[#161422] border-b border-zinc-200 dark:border-[#2f273d] px-4 py-4 space-y-3 font-mono text-sm"
    >
      <a
        v-for="link in [
          { name: t.nav.about, href: '#about' },
          { name: t.nav.projects, href: '#projects' },
          { name: t.nav.skills, href: '#skills' },
          { name: t.nav.experience, href: '#experience' },
          { name: t.nav.contact, href: '#contact' }
        ]"
        :key="link.name"
        :href="link.href"
        class="block text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 py-1 font-medium transition-colors"
        @click="isOpen = false"
      >
        > {{ link.name }}
      </a>
      <a
        href="https://github.com/haminh7036"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 pt-2 text-zinc-800 dark:text-zinc-200 text-sm"
      >
        <GithubIcon class="w-4 h-4" />
        <span>github.com/haminh7036</span>
      </a>
    </div>
  </header>
</template>
