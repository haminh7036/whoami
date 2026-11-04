<script setup>
import { useNavigation } from '../composables/useNavigation.js'

const { chapters, currentChapter, targetChapter, scrollProgress } = useNavigation()
</script>

<template>
  <footer
    class="shrink-0 border-t border-[var(--border-main)] bg-[var(--bg-main)] relative z-30 select-none"
  >
    <div
      class="max-w-[1440px] mx-auto px-4 sm:px-12 h-11 flex items-center justify-between gap-2 sm:gap-4 font-mono text-[11px] sm:text-xs"
    >
      <!-- Left: Quiet Keyboard Hints -->
      <div class="hidden md:flex items-center gap-5 text-[var(--text-muted)]">
        <span><strong class="text-[var(--text-main)] font-medium">[j/k]</strong> select row</span>
        <span>
          <strong class="text-[var(--text-main)] font-medium">[h/l]</strong> prev/next chapter
        </span>
        <span><strong class="text-[var(--text-main)] font-medium">[1-5]</strong> jump</span>
        <span><strong class="text-[var(--text-main)] font-medium">[gg/G]</strong> ends</span>
        <span><strong class="text-[var(--text-main)] font-medium">[enter]</strong> open</span>
      </div>
      <div class="md:hidden text-[var(--text-muted)] truncate">
        <span>Swipe ←/→ or tap 01–05</span>
      </div>

      <!-- Right: Scroll-Charge Indicator & Chapter Counter -->
      <div class="flex items-center gap-3 sm:gap-4 ml-auto shrink-0">
        <span class="hidden sm:inline text-[var(--text-muted)]" data-testid="footer-next-label">
          Next: {{ targetChapter.index }} / {{ targetChapter.label }}
        </span>

        <!-- Mini Architectural Progress Bar -->
        <div
          class="w-20 sm:w-36 h-1 bg-[var(--border-main)] overflow-hidden"
          aria-label="Scroll transition progress"
        >
          <div
            data-testid="bottom-scroll-progress"
            class="h-full bg-[var(--border-strong)] transition-[width] duration-150 ease-out"
            :style="{ width: `${scrollProgress}%` }"
          ></div>
        </div>

        <span class="font-bold text-[var(--text-main)]" data-testid="chapter-counter">
          {{ currentChapter.index }} / 0{{ chapters.length }}
        </span>
      </div>
    </div>
  </footer>
</template>
