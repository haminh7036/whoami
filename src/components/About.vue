<script setup>
import { watchEffect } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { useNavigation } from '../composables/useNavigation.js'

const { t } = useI18n()
const { activeChapter, activeItemIndex, setChapterItemCount, setChapterItemIndex } = useNavigation()

const CHAPTER_IDX = 1

watchEffect(() => {
  setChapterItemCount(CHAPTER_IDX, t.value.experience.items.length)
})

function selectExperience(idx) {
  setChapterItemIndex(CHAPTER_IDX, idx)
}
</script>

<template>
  <section
    aria-label="Experience"
    class="min-h-full lg:h-full max-w-[1440px] mx-auto px-4 sm:px-12 grid grid-cols-1 lg:grid-cols-12"
  >
    <!-- Left Column (Cols 1-5): Biography & Open Source Ethos -->
    <div
      class="lg:col-span-5 py-8 lg:py-12 lg:pr-10 lg:border-r border-[var(--border-main)] flex flex-col justify-between gap-8"
    >
      <div class="space-y-5">
        <p class="font-mono text-xs tracking-[0.14em] uppercase text-[var(--text-muted)]">
          02 / EXPERIENCE &amp; BACKGROUND
        </p>

        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)]">
          {{ t.about.heading }}
        </h2>

        <div class="space-y-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed pt-1">
          <p>{{ t.about.p1 }}</p>
          <p>{{ t.about.p2 }}</p>
        </div>
      </div>

      <!-- Motivation & Open Source Section -->
      <div class="pt-6 border-t border-[var(--border-main)] space-y-2">
        <div class="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent-primary)]">
          {{ t.about.coreValuesTitle }}
        </div>
        <p class="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          {{ t.about.coreValues }}
        </p>
      </div>
    </div>

    <!-- Right Column (Cols 6-12): Indexed Career Timeline -->
    <div class="lg:col-span-7 py-8 lg:py-12 lg:pl-12 flex flex-col justify-between">
      <div class="space-y-2">
        <div
          class="flex items-center justify-between pb-3 border-b border-[var(--border-strong)] font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-faint)]"
        >
          <span>INDEX / ROLE &amp; ORGANIZATION</span>
          <span>PERIOD / REF</span>
        </div>

        <div class="divide-y divide-[var(--border-main)]">
          <article
            v-for="(exp, idx) in t.experience.items"
            :key="exp.hash"
            :data-testid="`exp-row-${idx}`"
            class="relative py-5 px-4 transition-colors cursor-pointer"
            :class="
              activeChapter === CHAPTER_IDX && activeItemIndex === idx
                ? 'bg-[var(--bg-surface)]'
                : 'hover:bg-[var(--bg-surface)]/50'
            "
            @click="selectExperience(idx)"
          >
            <!-- Left 3px Terracotta Active Indicator -->
            <div
              v-if="activeChapter === CHAPTER_IDX && activeItemIndex === idx"
              class="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--accent-primary)]"
            ></div>

            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <div class="flex items-baseline gap-4">
                <span
                  class="font-mono text-xs font-bold"
                  :class="
                    activeChapter === CHAPTER_IDX && activeItemIndex === idx
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-faint)]'
                  "
                >
                  0{{ idx + 1 }}
                </span>
                <h3 class="text-base sm:text-lg font-bold text-[var(--text-main)]">
                  {{ exp.role }}
                  <span class="font-normal text-[var(--text-muted)]">· {{ exp.company }}</span>
                </h3>
              </div>

              <div class="font-mono text-xs text-[var(--text-muted)]">
                <span>{{ exp.period }}</span>
                <span class="text-[var(--text-faint)] ml-2">#{{ exp.hash }}</span>
              </div>
            </div>

            <p class="mt-2.5 pl-8 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {{ exp.description }}
            </p>
          </article>
        </div>
      </div>

      <div
        class="pt-4 border-t border-[var(--border-main)] flex items-center justify-between font-mono text-xs text-[var(--text-faint)]"
      >
        <span>{{ t.experience.heading }}</span>
        <span
          >0{{ (activeChapter === CHAPTER_IDX ? activeItemIndex : 0) + 1 }} / 0{{
            t.experience.items.length
          }}</span
        >
      </div>
    </div>
  </section>
</template>
