<script setup>
import { watchEffect } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { useNavigation } from '../composables/useNavigation.js'

const { t } = useI18n()
const { activeChapter, activeItemIndex, setChapterItemCount, setChapterItemIndex } = useNavigation()

const CHAPTER_IDX = 3

watchEffect(() => {
  setChapterItemCount(CHAPTER_IDX, t.value.skills.categories.length)
})

function selectCategory(idx) {
  setChapterItemIndex(CHAPTER_IDX, idx)
}

function formatIndex(num) {
  return String(num).padStart(2, '0')
}
</script>

<template>
  <section
    aria-label="Stack"
    class="min-h-full lg:h-full max-w-[1440px] mx-auto px-4 sm:px-12 py-8 lg:py-12 flex flex-col justify-between gap-8"
  >
    <!-- Top Section Heading -->
    <div
      class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border-main)]"
    >
      <div class="space-y-2">
        <p class="font-mono text-xs tracking-[0.14em] uppercase text-[var(--text-muted)]">
          04 / TECHNICAL STACK
        </p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)]">
          {{ t.skills.heading }}
        </h2>
      </div>
      <p class="font-mono text-xs text-[var(--text-muted)]">
        Production Backend · Infrastructure · Daily Linux Environment
      </p>
    </div>

    <!-- 3 Architectural Vertical Columns Separated by 1px Hairlines -->
    <div
      class="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border-main)]"
    >
      <div
        v-for="(cat, idx) in t.skills.categories"
        :key="cat.name"
        :data-testid="`skill-col-${idx}`"
        class="relative py-6 px-5 md:px-7 transition-colors cursor-pointer"
        :class="
          activeChapter === CHAPTER_IDX && activeItemIndex === idx
            ? 'bg-[var(--bg-surface)]/70'
            : 'hover:bg-[var(--bg-surface)]/30'
        "
        @click="selectCategory(idx)"
      >
        <div
          v-if="activeChapter === CHAPTER_IDX && activeItemIndex === idx"
          class="absolute top-0 left-0 right-0 h-[3px] bg-[var(--accent-primary)]"
        ></div>
        <div
          class="flex items-baseline justify-between pb-4 border-b border-[var(--border-strong)]"
        >
          <div class="flex items-baseline gap-3">
            <span
              class="font-mono text-xs font-bold"
              :class="
                activeChapter === CHAPTER_IDX && activeItemIndex === idx
                  ? 'text-[var(--accent-primary)]'
                  : 'text-[var(--text-faint)]'
              "
            >
              {{ formatIndex(idx + 1) }}
            </span>
            <h3 class="text-base sm:text-lg font-bold text-[var(--text-main)]">
              {{ cat.name }}
            </h3>
          </div>
          <span class="font-mono text-[11px] text-[var(--text-faint)]">
            {{ formatIndex(cat.items.length) }}
          </span>
        </div>

        <ul class="divide-y divide-[var(--border-main)]">
          <li
            v-for="(item, itemIdx) in cat.items"
            :key="item"
            class="py-3.5 flex items-baseline justify-between gap-4 font-mono text-xs sm:text-sm"
          >
            <span class="text-[var(--text-main)] font-medium">{{ item }}</span>
            <span class="text-[var(--text-faint)] text-[11px]">
              {{ formatIndex(idx + 1) }}.{{ formatIndex(itemIdx + 1) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
