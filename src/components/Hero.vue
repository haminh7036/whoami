<script setup>
import { ref } from 'vue'
import { profile } from '../data/portfolio.js'
import { useI18n } from '../composables/useI18n.js'
import { ArrowRight, Copy, Check, MapPin, Sparkles } from '@lucide/vue'
import GithubIcon from './icons/GithubIcon.vue'

const { t } = useI18n()
const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText('contact@haminh.dev')
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    // Graceful fallback for restricted clipboard permissions
  }
}
</script>

<template>
  <section class="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-8">
    <!-- Linux Terminal Window Card -->
    <div
      class="rounded-2xl bg-white dark:bg-[#161422] border border-zinc-200/90 dark:border-[#2f273d] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <!-- Terminal Title Bar -->
      <div
        class="px-4 py-3 bg-zinc-100/90 dark:bg-[#1d1a2c] border-b border-zinc-200/90 dark:border-[#2f273d] flex items-center justify-between font-mono text-xs text-zinc-500 dark:text-zinc-400"
      >
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-sky-500/90 inline-block"></span>
          <span class="ml-2 font-semibold text-zinc-700 dark:text-zinc-300"
            >minh@arch-linux: ~</span
          >
        </div>
        <div class="flex items-center gap-3">
          <span class="hidden sm:inline-block">fish</span>
          <span
            class="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20 text-[11px]"
          >
            ● active
          </span>
        </div>
      </div>

      <!-- Terminal Body Content -->
      <div class="p-6 sm:p-10 space-y-8">
        <!-- Prompt Line -->
        <div
          class="font-mono text-xs sm:text-sm flex flex-wrap items-center gap-2 text-zinc-500 dark:text-zinc-400"
        >
          <span class="text-rose-600 dark:text-rose-400 font-bold">minh@arch-linux</span>
          <span class="text-zinc-400">:</span>
          <span class="text-sky-600 dark:text-sky-400 font-semibold">~</span>
          <span class="text-zinc-400">$</span>
          <span class="text-zinc-900 dark:text-zinc-100 font-medium">whoami --stack --verbose</span>
        </div>

        <!-- Main Hero Intro -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div class="space-y-4 flex-1">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300"
            >
              <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span>{{ t.hero.status }}</span>
            </div>

            <div class="space-y-1">
              <p class="text-sm font-mono text-zinc-500 dark:text-zinc-400">
                {{ t.hero.greeting }}
              </p>
              <h1
                class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                {{ profile.name }}
                <span class="text-rose-600 dark:text-rose-400 font-mono text-2xl sm:text-4xl"
                  >_</span
                >
              </h1>
              <p class="text-lg sm:text-xl font-medium text-zinc-700 dark:text-zinc-300 pt-1">
                {{ t.hero.title }}
              </p>
            </div>

            <p
              class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl"
            >
              {{ t.hero.bio }}
            </p>

            <div
              class="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1"
            >
              <div class="flex items-center gap-1.5">
                <MapPin class="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                <span>{{ t.hero.location }}</span>
              </div>
              <span class="text-zinc-300 dark:text-zinc-700">•</span>
              <div class="flex items-center gap-1.5">
                <Sparkles class="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                <span>{{ t.sysinfo.focus }}</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400 text-white dark:text-zinc-950 font-mono text-xs sm:text-sm font-semibold transition-all shadow-md shadow-rose-500/20 cursor-pointer"
              >
                <span>$ cd ./projects</span>
                <ArrowRight class="w-4 h-4" />
              </a>

              <button
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-[#1f1b2e] border border-zinc-200 dark:border-[#2f273d] hover:border-rose-400 dark:hover:border-rose-500 text-zinc-800 dark:text-zinc-200 font-mono text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                @click="copyEmail"
              >
                <Check v-if="copied" class="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <Copy v-else class="w-4 h-4 text-zinc-500" />
                <span>{{ copied ? t.hero.emailCopied : t.hero.copyEmail }}</span>
              </button>

              <a
                :href="profile.socials.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-100 dark:bg-[#1f1b2e] border border-zinc-200 dark:border-[#2f273d] hover:border-rose-400 dark:hover:border-rose-500 text-zinc-800 dark:text-zinc-200 font-mono text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <GithubIcon class="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <!-- Avatar / Neofetch mini card -->
          <div class="w-full sm:w-auto flex flex-col items-center sm:items-end">
            <div class="relative group">
              <div
                class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-sky-400 opacity-20 group-hover:opacity-40 blur-lg transition duration-300"
              ></div>
              <div
                class="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-zinc-200 dark:border-[#2f273d] bg-zinc-100 dark:bg-[#1d1a2c]"
              >
                <img
                  :src="profile.avatar"
                  :alt="profile.name"
                  class="w-full h-full object-cover transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Neofetch stats -->
            <div
              class="mt-4 w-full sm:w-56 p-3.5 rounded-xl bg-zinc-50 dark:bg-[#1d1a2c]/80 border border-zinc-200 dark:border-[#2f273d] font-mono text-[11px] text-zinc-600 dark:text-zinc-400 space-y-1.5"
            >
              <div class="flex justify-between">
                <span class="text-zinc-400 dark:text-zinc-500">OS:</span>
                <span class="text-zinc-800 dark:text-zinc-200 font-medium">{{ t.sysinfo.os }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-zinc-400 dark:text-zinc-500">WM/DE:</span>
                <span class="text-zinc-800 dark:text-zinc-200 font-medium">{{ t.sysinfo.wm }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-zinc-400 dark:text-zinc-500">Shell:</span>
                <span class="text-zinc-800 dark:text-zinc-200 font-medium">{{
                  t.sysinfo.shell
                }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-zinc-400 dark:text-zinc-500">Term/Editor:</span>
                <span class="text-zinc-800 dark:text-zinc-200 font-medium"
                  >{{ t.sysinfo.term }} / {{ t.sysinfo.editor }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
