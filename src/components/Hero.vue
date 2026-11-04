<script setup>
import { ref, computed } from 'vue'
import { profile } from '../data/portfolio.js'
import { useI18n } from '../composables/useI18n.js'
import { useNavigation } from '../composables/useNavigation.js'

const { t } = useI18n()
const { goToChapter } = useNavigation()
const copied = ref(false)

const emailAddress = computed(() => (profile.socials?.email || '').replace(/^mailto:/, ''))

async function copyEmail() {
  try {
    if (!emailAddress.value) return
    await navigator.clipboard.writeText(emailAddress.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    // Graceful fallback for restricted clipboard permissions
  }
}

const sysRows = computed(() => [
  { label: 'OS', value: t.value.sysinfo.os },
  { label: 'WM / DE', value: t.value.sysinfo.wm },
  { label: 'Shell', value: t.value.sysinfo.shell },
  { label: 'Term / Editor', value: `${t.value.sysinfo.term} · ${t.value.sysinfo.editor}` },
  { label: 'Focus', value: t.value.sysinfo.focus }
])
</script>

<template>
  <section
    aria-label="Overview"
    class="min-h-full lg:h-full max-w-[1440px] mx-auto px-4 sm:px-12 grid grid-cols-1 lg:grid-cols-12"
  >
    <!-- Left Column (Cols 1-4 on Desktop, Second on Mobile): Identity & System Specification -->
    <div
      class="order-2 lg:order-1 lg:col-span-4 py-6 lg:py-12 lg:pr-10 border-t lg:border-t-0 lg:border-r border-[var(--border-main)] flex flex-col justify-between gap-8"
    >
      <div class="space-y-6">
        <p class="font-mono text-xs tracking-[0.14em] uppercase text-[var(--text-muted)]">
          01 / OVERVIEW
        </p>

        <div class="flex items-center gap-4">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-16 h-16 sm:w-20 sm:h-20 object-cover border border-[var(--border-main)] grayscale-[15%]"
            loading="eager"
          />
          <div class="space-y-1">
            <div class="font-mono text-xs font-bold text-[var(--text-main)]">
              {{ profile.handle }}
            </div>
            <div class="font-mono text-xs text-[var(--text-muted)]">
              {{ t.hero.location }}
            </div>
            <div
              class="inline-flex items-center gap-2 pt-1 font-mono text-xs text-[var(--text-main)]"
            >
              <span class="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span>
              <span>{{ t.hero.status }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Architectural Spec Table -->
      <div class="space-y-2">
        <div
          class="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-faint)] pb-2 border-b border-[var(--border-main)]"
        >
          Environment Specification
        </div>
        <dl class="divide-y divide-[var(--border-main)] font-mono text-xs">
          <div
            v-for="row in sysRows"
            :key="row.label"
            class="py-2.5 flex items-baseline justify-between gap-4"
          >
            <dt class="text-[var(--text-muted)]">{{ row.label }}</dt>
            <dd class="text-[var(--text-main)] font-medium text-right">{{ row.value }}</dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Right Column (Cols 5-12 on Desktop, First on Mobile): Editorial Statement & Primary Actions -->
    <div
      class="order-1 lg:order-2 lg:col-span-8 py-6 lg:py-12 lg:pl-12 flex flex-col justify-between gap-6 lg:gap-8"
    >
      <div class="space-y-6 my-auto">
        <p class="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
          {{ t.hero.greeting }} {{ profile.name }} — {{ t.hero.title }}
        </p>

        <h1
          class="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.04] text-[var(--text-main)]"
        >
          {{ profile.name }}
        </h1>

        <p class="text-xl sm:text-2xl font-medium text-[var(--text-muted)] tracking-tight">
          {{ t.hero.title }} · {{ t.sysinfo.focus }}
        </p>

        <p class="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl pt-2">
          {{ t.hero.bio }}
        </p>
      </div>

      <!-- Editorial Action Bar -->
      <div
        class="pt-6 border-t border-[var(--border-main)] flex flex-wrap items-center justify-between gap-6 font-mono text-xs sm:text-sm"
      >
        <div class="flex flex-wrap items-center gap-6 sm:gap-8">
          <button
            type="button"
            data-testid="hero-view-projects"
            class="font-bold text-[var(--text-main)] border-b-2 border-[var(--accent-primary)] pb-1 hover:text-[var(--accent-primary)] transition-colors cursor-pointer"
            @click="goToChapter(2, 0)"
          >
            03 / {{ t.hero.viewProjects }} →
          </button>

          <button
            type="button"
            data-testid="hero-copy-email"
            class="text-[var(--text-muted)] hover:text-[var(--text-main)] pb-1 border-b border-transparent hover:border-[var(--border-strong)] transition-colors cursor-pointer"
            @click="copyEmail"
          >
            {{ copied ? t.hero.emailCopied : t.hero.copyEmail }} ({{ emailAddress }})
          </button>
        </div>

        <div class="flex items-center gap-6">
          <a
            :href="profile.socials.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--text-main)] hover:text-[var(--accent-primary)] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            v-if="profile.socials.linkedin"
            :href="profile.socials.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--text-main)] hover:text-[var(--accent-primary)] transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
