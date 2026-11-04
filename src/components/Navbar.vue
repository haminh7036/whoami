<script setup>
import { useTheme } from '../composables/useTheme.js'
import { useNavigation } from '../composables/useNavigation.js'
import { profile } from '../data/portfolio.js'

const { theme, toggleTheme } = useTheme()
const { chapters, activeChapter, scrollProgress, goToChapter } = useNavigation()
</script>

<template>
  <header class="shrink-0 border-b border-[var(--border-main)] bg-[var(--bg-main)] relative z-30">
    <!-- Top 3px Scroll-Charge Hairline Bar -->
    <div class="h-[3px] w-full bg-[var(--border-main)] overflow-hidden">
      <div
        data-testid="top-scroll-progress"
        class="h-full bg-[var(--border-strong)] transition-[width] duration-150 ease-out"
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>

    <div
      class="max-w-[1440px] mx-auto px-4 sm:px-12 h-14 flex items-center justify-between gap-2 sm:gap-4"
    >
      <!-- Left: Editorial Identity -->
      <button
        type="button"
        class="flex items-baseline gap-3 text-left cursor-pointer group focus:outline-none shrink-0"
        @click="goToChapter(0, 0)"
      >
        <span class="text-sm sm:text-base font-bold tracking-tight text-[var(--text-main)]">
          {{ profile.name }}
        </span>
        <span class="hidden lg:inline font-mono text-xs text-[var(--text-muted)]">
          {{ profile.title }} · {{ profile.location }}
        </span>
      </button>

      <!-- Center / Right: Numbered Chapter Index -->
      <div class="flex items-center gap-3 sm:gap-7">
        <nav aria-label="Chapters" class="flex items-center gap-2.5 sm:gap-6">
          <button
            v-for="(chap, idx) in chapters"
            :key="chap.id"
            type="button"
            :data-testid="`nav-chapter-${chap.index}`"
            class="relative py-1 flex items-baseline gap-1 sm:gap-1.5 cursor-pointer transition-colors focus:outline-none"
            :class="
              activeChapter === idx
                ? 'text-[var(--text-main)] font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            "
            @click="goToChapter(idx, 0)"
          >
            <span
              class="font-mono text-[11px]"
              :class="
                activeChapter === idx
                  ? 'text-[var(--text-main)] font-bold'
                  : 'text-[var(--text-faint)]'
              "
            >
              {{ chap.index }}
            </span>
            <span class="text-xs sm:text-sm hidden md:inline whitespace-nowrap">
              {{ chap.label }}
            </span>

            <!-- Active Terracotta Micro-Dot -->
            <span
              v-if="activeChapter === idx"
              data-testid="active-chapter-dot"
              class="-bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] absolute"
            ></span>
          </button>
        </nav>

        <span class="h-3.5 w-[1px] bg-[var(--border-main)]" aria-hidden="true"></span>

        <!-- Minimal Theme Toggle -->
        <button
          type="button"
          data-testid="theme-toggle"
          class="font-mono text-[11px] sm:text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer transition-colors focus:outline-none shrink-0"
          :aria-label="'Toggle theme, current: ' + theme"
          @click="toggleTheme"
        >
          <span :class="theme === 'light' ? 'text-[var(--text-main)] font-semibold' : ''">
            Light
          </span>
          <span class="text-[var(--text-faint)] mx-0.5">/</span>
          <span :class="theme === 'dark' ? 'text-[var(--text-main)] font-semibold' : ''">
            Dark
          </span>
        </button>
      </div>
    </div>
  </header>
</template>
