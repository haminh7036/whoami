<script setup>
import { useI18n } from '../composables/useI18n.js'
import { Terminal, HeartHandshake } from '@lucide/vue'

const { t } = useI18n()
</script>

<template>
  <section
    id="about"
    class="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-200/80 dark:border-[#2f273d]/80 transition-colors duration-200 scroll-mt-20"
  >
    <div class="space-y-10">
      <!-- Section Header -->
      <div class="space-y-2">
        <div
          class="flex items-center gap-2 text-xs font-mono font-semibold text-rose-600 dark:text-rose-400"
        >
          <Terminal class="w-3.5 h-3.5" />
          <span>{{ t.about.sectionNumber }}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
          {{ t.about.heading }}
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Left: Bio & Philosophy -->
        <div class="lg:col-span-6 space-y-6">
          <div
            class="p-6 rounded-2xl bg-white dark:bg-[#161422] border border-zinc-200 dark:border-[#2f273d] space-y-4 shadow-sm"
          >
            <div
              class="relative inline-flex items-center group pb-2 border-b border-zinc-100 dark:border-[#262035] w-full"
            >
              <div
                class="flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-500 cursor-help"
              >
                <span class="text-rose-600 dark:text-rose-400 font-bold">$</span>
                <span>cat ~/about/bio.txt</span>
              </div>
              <!-- Tooltip -->
              <div
                class="pointer-events-none absolute -top-6 left-0 z-20 hidden group-hover:flex items-center px-2 py-1 rounded-md bg-zinc-900 text-zinc-200 dark:bg-[#1f1b2e] dark:text-zinc-100 text-[10px] font-mono border border-zinc-700 dark:border-[#2f273d] shadow-lg whitespace-nowrap"
              >
                # Reads background and current technical focus
              </div>
            </div>

            <p class="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
              {{ t.about.p1 }}
            </p>

            <p class="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
              {{ t.about.p2 }}
            </p>
          </div>

          <!-- Philosophy Card -->
          <div
            class="p-5 rounded-2xl bg-zinc-50 dark:bg-[#161422]/70 border border-zinc-200 dark:border-[#2f273d] space-y-2"
          >
            <h4
              class="text-xs font-mono font-semibold text-zinc-900 dark:text-zinc-200 flex items-center gap-2"
            >
              <HeartHandshake class="w-4 h-4 text-rose-600 dark:text-rose-400" />
              <span>{{ t.about.coreValuesTitle }}</span>
            </h4>
            <p class="text-xs text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed">
              {{ t.about.coreValues }}
            </p>
          </div>
        </div>

        <!-- Right: Career Timeline as Git Log -->
        <div id="experience" class="lg:col-span-6 space-y-4 scroll-mt-20">
          <div
            class="p-6 rounded-2xl bg-white dark:bg-[#161422] border border-zinc-200 dark:border-[#2f273d] shadow-sm space-y-6"
          >
            <div
              class="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-[#262035] font-mono text-xs"
            >
              <div class="relative inline-flex items-center group">
                <span class="text-zinc-500 dark:text-zinc-400 cursor-help">
                  <span class="text-rose-600 dark:text-rose-400 font-bold">$</span>
                  {{ t.experience.subheading }}
                </span>
                <!-- Tooltip -->
                <div
                  class="pointer-events-none absolute -top-7 left-0 z-20 hidden group-hover:flex items-center px-2 py-1 rounded-md bg-zinc-900 text-zinc-200 dark:bg-[#1f1b2e] dark:text-zinc-100 text-[10px] font-mono border border-zinc-700 dark:border-[#2f273d] shadow-lg whitespace-nowrap"
                >
                  # Shows career history and milestones as commits
                </div>
              </div>
              <span class="text-[11px] text-sky-600 dark:text-sky-400 font-semibold"
                >branch: main</span
              >
            </div>

            <div class="space-y-6">
              <div
                v-for="(exp, idx) in t.experience.items"
                :key="idx"
                class="relative pl-6 border-l-2 border-zinc-200 dark:border-[#2f273d] space-y-1.5 group hover:border-rose-500 dark:hover:border-rose-400 transition-colors"
              >
                <!-- Commit Dot -->
                <div
                  class="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-zinc-300 dark:bg-[#2f273d] group-hover:bg-rose-500 dark:group-hover:bg-rose-400 border-2 border-white dark:border-[#161422] transition-colors"
                ></div>

                <div class="flex items-center justify-between gap-2">
                  <span class="text-xs font-mono font-semibold text-rose-700 dark:text-rose-400">
                    {{ exp.period }}
                  </span>
                  <span
                    class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#1f1b2e] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-[#2f273d]"
                  >
                    commit #{{ (idx + 1) * 73 }}a8f
                  </span>
                </div>

                <h3 class="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {{ exp.role }}
                  <span class="text-zinc-500 dark:text-zinc-400 font-normal"
                    >@ {{ exp.company }}</span
                  >
                </h3>

                <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {{ exp.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
