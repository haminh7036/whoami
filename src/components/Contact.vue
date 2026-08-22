<script setup>
import { ref } from 'vue'
import { profile } from '../data/portfolio.js'
import { useI18n } from '../composables/useI18n.js'
import { Terminal, Send, Copy, Check } from '@lucide/vue'
import GithubIcon from './icons/GithubIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'

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
  <section
    id="contact"
    class="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-200/80 dark:border-[#2f273d]/80 text-center transition-colors duration-200 scroll-mt-20"
  >
    <div
      class="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#161422] border border-zinc-200 dark:border-[#2f273d] shadow-sm space-y-8"
    >
      <!-- Section Header -->
      <div class="space-y-2">
        <div
          class="inline-flex items-center gap-2 text-xs font-mono font-semibold text-rose-600 dark:text-rose-400"
        >
          <Terminal class="w-3.5 h-3.5" />
          <span>{{ t.contact.sectionNumber }}</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
          {{ t.contact.heading }}
        </h2>
        <p class="font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {{ t.contact.subheading }}
        </p>
      </div>

      <p class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
        {{ t.contact.intro }}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <a
          :href="profile.socials.email"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400 text-white dark:text-zinc-950 font-mono text-xs sm:text-sm font-semibold transition-all shadow-md shadow-rose-500/20 cursor-pointer"
        >
          <Send class="w-4 h-4" />
          <span>{{ t.contact.sendEmail }}</span>
        </a>

        <button
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 dark:bg-[#1f1b2e] border border-zinc-200 dark:border-[#2f273d] hover:border-rose-400 dark:hover:border-rose-500 text-zinc-800 dark:text-zinc-200 font-mono text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          @click="copyEmail"
        >
          <Check v-if="copied" class="w-4 h-4 text-rose-600 dark:text-rose-400" />
          <Copy v-else class="w-4 h-4 text-zinc-500" />
          <span>{{ copied ? t.hero.emailCopied : t.contact.copyAddress }}</span>
        </button>
      </div>

      <!-- Socials -->
      <div
        class="flex items-center justify-center gap-3 pt-4 border-t border-zinc-100 dark:border-[#262035]"
      >
        <a
          :href="profile.socials.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-[#1f1b2e] border border-zinc-200 dark:border-[#2f273d] text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 font-mono text-xs transition-colors cursor-pointer"
        >
          <GithubIcon class="w-4 h-4" />
          <span>GitHub</span>
        </a>

        <a
          v-if="profile.socials.linkedin"
          :href="profile.socials.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-[#1f1b2e] border border-zinc-200 dark:border-[#2f273d] text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 font-mono text-xs transition-colors cursor-pointer"
        >
          <LinkedinIcon class="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
</template>
