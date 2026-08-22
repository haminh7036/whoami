<script setup>
import { useI18n } from '../composables/useI18n.js'
import { Terminal, CheckCircle2, Code2, Layout, Server } from '@lucide/vue'

const { t } = useI18n()

function getCategoryIcon(idx) {
  if (idx === 0) return Code2
  if (idx === 1) return Layout
  return Server
}
</script>

<template>
  <section
    id="skills"
    class="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-200/80 dark:border-[#2f273d]/80 transition-colors duration-200 scroll-mt-20"
  >
    <div class="space-y-8">
      <!-- Section Header -->
      <div class="space-y-2">
        <div
          class="flex items-center gap-2 text-xs font-mono font-semibold text-rose-600 dark:text-rose-400"
        >
          <Terminal class="w-3.5 h-3.5" />
          <span>{{ t.skills.sectionNumber }}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
          {{ t.skills.heading }}
        </h2>
        <div class="relative inline-flex items-center group">
          <p class="font-mono text-xs text-zinc-500 dark:text-zinc-400 cursor-help">
            <span class="text-rose-600 dark:text-rose-400 font-bold">$</span>
            {{ t.skills.subheading }}
          </p>
          <!-- Tooltip -->
          <div
            class="pointer-events-none absolute -top-7 left-0 z-20 hidden group-hover:flex items-center px-2 py-1 rounded-md bg-zinc-900 text-zinc-200 dark:bg-[#1f1b2e] dark:text-zinc-100 text-[10px] font-mono border border-zinc-700 dark:border-[#2f273d] shadow-lg whitespace-nowrap"
          >
            # Displays technical skills organized by category
          </div>
        </div>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(cat, idx) in t.skills.categories"
          :key="cat.name"
          class="p-6 rounded-2xl bg-white dark:bg-[#161422] border border-zinc-200 dark:border-[#2f273d] space-y-5 shadow-sm hover:border-rose-300 dark:hover:border-rose-800/80 transition-colors"
        >
          <!-- Category Header -->
          <div
            class="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-[#262035]"
          >
            <div
              class="flex items-center gap-2 font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100"
            >
              <component
                :is="getCategoryIcon(idx)"
                class="w-4 h-4 text-rose-600 dark:text-rose-400"
              />
              <span>// {{ cat.name }}</span>
            </div>
            <span class="text-[10px] font-mono text-zinc-400">drwxr-xr-x</span>
          </div>

          <!-- Items list -->
          <ul class="space-y-2.5">
            <li
              v-for="item in cat.items"
              :key="item"
              class="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-300 group"
            >
              <CheckCircle2
                class="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0 group-hover:scale-110 transition-transform"
              />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
