<script setup>
import { useI18n } from '../composables/useI18n.js'
import { profile } from '../data/portfolio.js'

const { t, locale } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="py-8 px-4 sm:px-6 border-t border-zinc-200/80 dark:border-[#2f273d]/80 font-mono text-xs text-zinc-500 dark:text-zinc-400 transition-colors duration-200"
  >
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Tmux style indicator -->
      <div class="flex items-center gap-2">
        <span
          class="px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 font-bold border border-rose-200 dark:border-rose-800/60"
        >
          [0] whoami*
        </span>
        <span>© {{ currentYear }} {{ profile.name }}. {{ t.footer.rights }}</span>
      </div>

      <!-- Center status -->
      <div class="hidden sm:flex items-center gap-3 text-[11px] text-zinc-400 dark:text-zinc-500">
        <span>{{ t.footer.kernel }}</span>
        <span>•</span>
        <span>lang: {{ locale.toUpperCase() }}</span>
      </div>

      <!-- Right note -->
      <div class="text-[11px] text-zinc-500 dark:text-zinc-400">
        {{ t.footer.builtWith }}
      </div>
    </div>
  </footer>
</template>
