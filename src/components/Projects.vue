<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { useNavigation } from '../composables/useNavigation.js'

const { t } = useI18n()
const {
  activeChapter,
  activeItemIndex,
  setChapterItemCount,
  setChapterItemIndex,
  registerChapterAction
} = useNavigation()

const CHAPTER_IDX = 2
const activeCategory = ref('All')

const categories = computed(() => {
  const cats = new Set(t.value.projects.items.map((p) => p.category))
  return ['All', ...Array.from(cats)]
})

function getCategoryCount(cat) {
  if (cat === 'All') return t.value.projects.items.length
  return t.value.projects.items.filter((p) => p.category === cat).length
}

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return t.value.projects.items
  return t.value.projects.items.filter((p) => p.category === activeCategory.value)
})

function selectCategory(cat) {
  activeCategory.value = cat
  setChapterItemCount(CHAPTER_IDX, filteredProjects.value.length)
  setChapterItemIndex(CHAPTER_IDX, 0)
}

watchEffect(() => {
  setChapterItemCount(CHAPTER_IDX, filteredProjects.value.length)
})

const selectedIndex = computed(() => {
  const idx = activeChapter.value === CHAPTER_IDX ? activeItemIndex.value : 0
  return Math.min(idx, Math.max(0, filteredProjects.value.length - 1))
})

const selectedProject = computed(() => filteredProjects.value[selectedIndex.value] || null)

function selectProject(idx) {
  setChapterItemIndex(CHAPTER_IDX, idx)
}

registerChapterAction(CHAPTER_IDX, (idx) => {
  const proj = filteredProjects.value[idx]
  if (!proj) return
  const url = proj.github || proj.demo
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
})

function formatIndex(num) {
  return String(num).padStart(2, '0')
}
</script>

<template>
  <section
    aria-label="Selected Work"
    class="min-h-full lg:h-full max-w-[1440px] mx-auto px-4 sm:px-12 grid grid-cols-1 lg:grid-cols-12"
  >
    <!-- Left Column (Cols 1-4): Header, Filter Links, and Active Selection Inspector -->
    <div
      class="lg:col-span-4 py-8 lg:py-10 lg:pr-10 lg:border-r border-[var(--border-main)] flex flex-col justify-between gap-6"
    >
      <div class="space-y-5">
        <p class="font-mono text-xs tracking-[0.14em] uppercase text-[var(--text-muted)]">
          03 / SELECTED WORK
        </p>

        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)]">
          {{ t.projects.heading }}
        </h2>

        <!-- Clean Underlined Filter Links (No Pill Boxes) -->
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 font-mono text-xs">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            :data-testid="`filter-${cat}`"
            class="pb-1 transition-colors cursor-pointer border-b-[1.5px]"
            :class="
              activeCategory === cat
                ? 'text-[var(--text-main)] font-bold border-[var(--border-strong)]'
                : 'text-[var(--text-muted)] border-transparent hover:text-[var(--text-main)]'
            "
            @click="selectCategory(cat)"
          >
            {{ cat }} ({{ formatIndex(getCategoryCount(cat)) }})
          </button>
        </div>
      </div>

      <!-- Active Selection Detail Pane -->
      <div
        v-if="selectedProject"
        data-testid="active-project-detail"
        class="pt-6 border-t border-[var(--border-main)] space-y-3"
      >
        <div
          class="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent-primary)] flex items-center justify-between"
        >
          <span>
            ACTIVE SELECTION · {{ formatIndex(selectedIndex + 1) }} /
            {{ formatIndex(filteredProjects.length) }}
          </span>
          <span class="text-[var(--text-faint)]">
            {{ selectedProject.private ? t.projects.privateBadge : t.projects.publicBadge }}
          </span>
        </div>

        <h3
          data-testid="active-project-title"
          class="text-lg sm:text-xl font-bold text-[var(--text-main)] leading-snug"
        >
          {{ selectedProject.title }}
        </h3>

        <p class="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          {{ selectedProject.description }}
        </p>

        <p class="font-mono text-xs text-[var(--text-muted)] pt-1">
          {{ selectedProject.tags.join('  ·  ') }}
        </p>

        <div
          v-if="selectedProject.github || selectedProject.demo"
          class="flex items-center gap-6 pt-2 font-mono text-xs"
        >
          <a
            v-if="selectedProject.github"
            :href="selectedProject.github"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold text-[var(--text-main)] hover:text-[var(--accent-primary)] border-b border-[var(--border-strong)] pb-0.5 transition-colors"
          >
            {{ t.projects.viewSource }} (GitHub) ↗
          </a>
          <a
            v-if="selectedProject.demo"
            :href="selectedProject.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold text-[var(--text-main)] hover:text-[var(--accent-primary)] border-b border-[var(--border-strong)] pb-0.5 transition-colors"
          >
            {{ t.projects.liveDemo }} ↗
          </a>
        </div>
      </div>
    </div>

    <!-- Right Column (Cols 5-12): Architectural Project Index Table -->
    <div class="lg:col-span-8 py-8 lg:py-10 lg:pl-12 flex flex-col justify-center">
      <!-- Table Column Headers -->
      <div
        class="grid grid-cols-12 gap-2 sm:gap-4 pb-2.5 border-b border-[var(--border-strong)] font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-faint)] px-3"
      >
        <span class="col-span-1">#</span>
        <span class="col-span-7 sm:col-span-5">PROJECT</span>
        <span class="col-span-4 hidden sm:inline">STACK</span>
        <span class="col-span-4 sm:col-span-2 text-right">SCOPE</span>
      </div>

      <!-- Indexed Rows -->
      <div class="divide-y divide-[var(--border-main)] border-b border-[var(--border-main)]">
        <div
          v-for="(project, idx) in filteredProjects"
          :key="project.id"
          :data-testid="`project-row-${idx}`"
          class="relative grid grid-cols-12 gap-2 sm:gap-4 items-center py-3.5 px-3 cursor-pointer transition-colors"
          :class="
            selectedIndex === idx ? 'bg-[var(--bg-surface)]' : 'hover:bg-[var(--bg-surface)]/50'
          "
          @click="selectProject(idx)"
        >
          <!-- Left 3px Terracotta Indicator Bar -->
          <div
            v-if="selectedIndex === idx"
            class="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--accent-primary)]"
          ></div>

          <!-- Index Number -->
          <span
            class="col-span-1 font-mono text-xs font-bold"
            :class="
              selectedIndex === idx ? 'text-[var(--accent-primary)]' : 'text-[var(--text-faint)]'
            "
          >
            {{ formatIndex(idx + 1) }}
          </span>

          <!-- Project Title -->
          <span
            class="col-span-7 sm:col-span-5 text-sm sm:text-base truncate"
            :class="
              selectedIndex === idx
                ? 'font-bold text-[var(--text-main)]'
                : 'font-medium text-[var(--text-main)]'
            "
          >
            {{ project.title }}
          </span>

          <!-- Condensed Stack -->
          <span
            class="col-span-4 hidden sm:inline font-mono text-xs text-[var(--text-muted)] truncate"
          >
            {{ project.tags.slice(0, 3).join(' · ') }}
          </span>

          <!-- Scope / Direct Link -->
          <span class="col-span-4 sm:col-span-2 font-mono text-xs text-right truncate">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[var(--text-main)] hover:text-[var(--accent-primary)] font-medium"
              @click.stop
            >
              GitHub ↗
            </a>
            <a
              v-else-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[var(--text-main)] hover:text-[var(--accent-primary)] font-medium"
              @click.stop
            >
              Health ↗
            </a>
            <span v-else class="text-[var(--text-faint)]">
              {{ project.category }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
