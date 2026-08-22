<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { FolderGit2, ExternalLink, Terminal, Star } from '@lucide/vue'
import GithubIcon from './icons/GithubIcon.vue'

const { t } = useI18n()
const activeCategory = ref('All')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return t.value.projects.items
  return t.value.projects.items.filter((p) =>
    p.category.toLowerCase().includes(activeCategory.value.toLowerCase())
  )
})
</script>

<template>
  <section
    id="projects"
    class="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-200/80 dark:border-[#2f273d]/80 transition-colors duration-200"
  >
    <div class="space-y-8">
      <!-- Header & Filter -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="space-y-2">
          <div
            class="flex items-center gap-2 text-xs font-mono font-semibold text-rose-600 dark:text-rose-400"
          >
            <Terminal class="w-3.5 h-3.5" />
            <span>{{ t.projects.sectionNumber }}</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
            {{ t.projects.heading }}
          </h2>
          <p class="font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <span class="text-rose-600 dark:text-rose-400 font-bold">$</span>
            {{ t.projects.subheading }}
          </p>
        </div>

        <!-- Filter Tags -->
        <div
          class="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-[#161422] border border-zinc-200 dark:border-[#2f273d] self-start md:self-auto font-mono text-xs"
        >
          <button
            v-for="cat in ['All', 'Frontend', 'Backend']"
            :key="cat"
            class="px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            :class="
              activeCategory === cat
                ? 'bg-white dark:bg-[#1f1b2e] text-rose-700 dark:text-rose-400 font-semibold shadow-sm border border-zinc-200/80 dark:border-rose-900/40'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            "
            @click="activeCategory = cat"
          >
            {{
              cat === 'All'
                ? t.projects.filterAll
                : cat === 'Frontend'
                  ? t.projects.filterFrontend
                  : t.projects.filterBackend
            }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#161422] border border-zinc-200 dark:border-[#2f273d] hover:border-rose-300 dark:hover:border-rose-800/80 shadow-sm hover:shadow-md transition-all duration-200 group"
        >
          <div class="space-y-4">
            <!-- Card Header: Linux permission style & links -->
            <div class="flex items-center justify-between font-mono text-xs">
              <span class="text-[11px] text-zinc-400 dark:text-zinc-500"> -rwxr-xr-x </span>
              <div class="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-400">
                <span v-if="project.stars" class="flex items-center gap-1 text-[11px]">
                  <Star class="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>{{ project.stars }}</span>
                </span>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-1 rounded hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  :aria-label="project.title + ' GitHub Repository'"
                >
                  <GithubIcon class="w-4 h-4" />
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-1 rounded hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  :aria-label="project.title + ' Live Demo'"
                >
                  <ExternalLink class="w-4 h-4" />
                </a>
              </div>
            </div>

            <!-- Project Title & Description -->
            <div class="space-y-2">
              <h3
                class="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <FolderGit2 class="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                <span>{{ project.title }}</span>
              </h3>
              <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {{ project.description }}
              </p>
            </div>
          </div>

          <!-- Tags Footer -->
          <div
            class="flex flex-wrap gap-1.5 pt-6 border-t border-zinc-100 dark:border-[#262035] mt-6"
          >
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-[#1f1b2e] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#2f273d]"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
