<script setup>
import { ref, computed, watchEffect } from 'vue'
import { profile } from '../data/portfolio.js'
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

const CHAPTER_IDX = 4
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
    // Graceful fallback
  }
}

const contactRows = computed(() => [
  {
    id: 'send-email',
    label: t.value.contact.sendEmail,
    value: emailAddress.value,
    actionLabel: 'mailto ↗',
    href: profile.socials.email,
    external: false
  },
  {
    id: 'copy-email',
    label: copied.value ? t.value.hero.emailCopied : t.value.contact.copyAddress,
    value: emailAddress.value,
    actionLabel: copied.value ? 'Copied' : 'Clipboard',
    onClick: copyEmail
  },
  {
    id: 'github',
    label: t.value.contact.github,
    value: 'github.com/haminh7036',
    actionLabel: 'Open ↗',
    href: profile.socials.github,
    external: true
  },
  {
    id: 'linkedin',
    label: t.value.contact.linkedin,
    value: 'linkedin.com/in/haminh7036',
    actionLabel: 'Open ↗',
    href: profile.socials.linkedin,
    external: true
  }
])

watchEffect(() => {
  setChapterItemCount(CHAPTER_IDX, contactRows.value.length)
})

function triggerRow(idx) {
  setChapterItemIndex(CHAPTER_IDX, idx)
  const row = contactRows.value[idx]
  if (!row) return
  if (row.onClick) {
    row.onClick()
  } else if (row.href) {
    if (row.external) {
      window.open(row.href, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = row.href
    }
  }
}

registerChapterAction(CHAPTER_IDX, (idx) => {
  triggerRow(idx)
})
</script>

<template>
  <section
    aria-label="Contact"
    class="min-h-full lg:h-full max-w-[1440px] mx-auto px-4 sm:px-12 grid grid-cols-1 lg:grid-cols-12"
  >
    <!-- Left Column (Cols 1-5): Contact Statement -->
    <div
      class="lg:col-span-5 py-8 lg:py-12 lg:pr-10 lg:border-r border-[var(--border-main)] flex flex-col justify-between gap-8"
    >
      <div class="space-y-5">
        <p class="font-mono text-xs tracking-[0.14em] uppercase text-[var(--text-muted)]">
          05 / CONTACT
        </p>

        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)]">
          {{ t.contact.heading }}
        </h2>

        <p class="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed pt-1">
          {{ t.contact.intro }}
        </p>
      </div>

      <div
        class="pt-6 border-t border-[var(--border-main)] font-mono text-xs text-[var(--text-muted)] space-y-1"
      >
        <div>{{ profile.name }} · {{ profile.title }}</div>
        <div class="text-[var(--text-faint)]">{{ t.footer.builtWith }}</div>
      </div>
    </div>

    <!-- Right Column (Cols 6-12): Interactive Channel Table -->
    <div class="lg:col-span-7 py-8 lg:py-12 lg:pl-12 flex flex-col justify-center">
      <div
        class="grid grid-cols-12 gap-4 pb-2.5 border-b border-[var(--border-strong)] font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-faint)] px-4"
      >
        <span class="col-span-2">INDEX</span>
        <span class="col-span-4">CHANNEL</span>
        <span class="col-span-4">ADDRESS</span>
        <span class="col-span-2 text-right">ACTION</span>
      </div>

      <div class="divide-y divide-[var(--border-main)] border-b border-[var(--border-main)]">
        <div
          v-for="(row, idx) in contactRows"
          :key="row.id"
          :data-testid="`contact-row-${idx}`"
          class="relative grid grid-cols-12 gap-4 items-center py-5 px-4 cursor-pointer transition-colors"
          :class="
            activeChapter === CHAPTER_IDX && activeItemIndex === idx
              ? 'bg-[var(--bg-surface)]'
              : 'hover:bg-[var(--bg-surface)]/50'
          "
          @click="triggerRow(idx)"
        >
          <div
            v-if="activeChapter === CHAPTER_IDX && activeItemIndex === idx"
            class="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--accent-primary)]"
          ></div>

          <span
            class="col-span-2 font-mono text-xs font-bold"
            :class="
              activeChapter === CHAPTER_IDX && activeItemIndex === idx
                ? 'text-[var(--accent-primary)]'
                : 'text-[var(--text-faint)]'
            "
          >
            0{{ idx + 1 }}
          </span>

          <span class="col-span-4 text-sm sm:text-base font-bold text-[var(--text-main)]">
            {{ row.label }}
          </span>

          <span class="col-span-4 font-mono text-xs text-[var(--text-muted)] truncate">
            {{ row.value }}
          </span>

          <span class="col-span-2 font-mono text-xs text-right font-medium text-[var(--text-main)]">
            {{ row.actionLabel }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
