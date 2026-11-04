import { ref, computed } from 'vue'

export const chapters = [
  { id: 'overview', index: '01', label: 'Overview' },
  { id: 'experience', index: '02', label: 'Experience' },
  { id: 'projects', index: '03', label: 'Selected Work' },
  { id: 'stack', index: '04', label: 'Stack' },
  { id: 'contact', index: '05', label: 'Contact' }
]

const activeChapter = ref(0)
const itemIndices = ref([0, 0, 0, 0, 0])
const itemCounts = ref([0, 3, 6, 3, 4])
const chapterActions = new Map()

const scrollProgress = ref(0)
const scrollDirection = ref(0)

// 240 threshold: 2 standard mouse-wheel notches (120px each) = 50% -> 100%
const CHARGE_THRESHOLD = 240
const DECAY_DELAY_MS = 650
const COOLDOWN_MS = 550
const SWIPE_THRESHOLD_PX = 60

let accumulatedDelta = 0
let decayTimer = null
let commitTimer = null
let cooldownUntil = 0
let lastGKeyTime = 0

// Touch swipe tracking
let touchStartX = 0
let touchStartY = 0
let isHorizontalTouch = null

const activeItemIndex = computed({
  get: () => itemIndices.value[activeChapter.value] ?? 0,
  set: (val) => {
    itemIndices.value[activeChapter.value] = val
  }
})

const currentChapter = computed(() => chapters[activeChapter.value])

const targetChapter = computed(() => {
  if (scrollDirection.value !== 0) {
    const nextIdx = activeChapter.value + scrollDirection.value
    if (nextIdx >= 0 && nextIdx < chapters.length) {
      return chapters[nextIdx]
    }
  }
  const fallbackIdx = activeChapter.value < chapters.length - 1 ? activeChapter.value + 1 : 0
  return chapters[fallbackIdx]
})

function resetScrollCharge() {
  accumulatedDelta = 0
  scrollProgress.value = 0
  scrollDirection.value = 0
  if (decayTimer) {
    clearTimeout(decayTimer)
    decayTimer = null
  }
  if (commitTimer) {
    clearTimeout(commitTimer)
    commitTimer = null
  }
}

function goToChapter(index, initialItem = null) {
  const clamped = Math.max(0, Math.min(chapters.length - 1, index))
  resetScrollCharge()
  activeChapter.value = clamped
  if (initialItem !== null) {
    const count = itemCounts.value[clamped] || 0
    itemIndices.value[clamped] = count > 0 ? Math.max(0, Math.min(count - 1, initialItem)) : 0
  }
}

function setChapterItemCount(chapterIdx, count) {
  itemCounts.value[chapterIdx] = count
  if (itemIndices.value[chapterIdx] >= count) {
    itemIndices.value[chapterIdx] = Math.max(0, count - 1)
  }
}

function setChapterItemIndex(chapterIdx, itemIdx) {
  const count = itemCounts.value[chapterIdx] || 0
  if (count === 0) {
    itemIndices.value[chapterIdx] = 0
    return
  }
  itemIndices.value[chapterIdx] = Math.max(0, Math.min(count - 1, itemIdx))
}

function registerChapterAction(chapterIdx, fn) {
  chapterActions.set(chapterIdx, fn)
}

function normalizeWheelDelta(e) {
  const raw = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX
  if (e.deltaMode === 1) return raw * 40 // DOM_DELTA_LINE
  if (e.deltaMode === 2) return raw * 240 // DOM_DELTA_PAGE
  return raw
}

function canScrollInternally(target, deltaY) {
  if (!(target instanceof Element)) return false
  const container = target.closest('.chapter-scroll-area')
  if (!container) return false
  const { scrollTop, scrollHeight, clientHeight } = container
  if (scrollHeight <= clientHeight + 2) return false
  if (deltaY > 0 && scrollTop + clientHeight < scrollHeight - 2) return true
  if (deltaY < 0 && scrollTop > 2) return true
  return false
}

function handleWheel(e) {
  const now = Date.now()
  if (now < cooldownUntil || commitTimer) {
    e.preventDefault()
    return
  }

  const delta = normalizeWheelDelta(e)
  if (Math.abs(delta) < 2) return

  if (canScrollInternally(e.target, delta)) {
    resetScrollCharge()
    return
  }

  const dir = delta > 0 ? 1 : -1
  const nextChapterIdx = activeChapter.value + dir

  if (nextChapterIdx < 0 || nextChapterIdx >= chapters.length) {
    resetScrollCharge()
    return
  }

  e.preventDefault()

  if (scrollDirection.value !== 0 && scrollDirection.value !== dir) {
    accumulatedDelta = 0
  }

  scrollDirection.value = dir
  // Discrete mouse wheel notches (>= 90px) advance cleanly by 120 (50% of 240 threshold)
  const step = Math.abs(delta) >= 90 ? 120 : Math.min(Math.abs(delta), 90)
  accumulatedDelta += step
  scrollProgress.value = Math.min(100, Math.round((accumulatedDelta / CHARGE_THRESHOLD) * 100))

  if (decayTimer) clearTimeout(decayTimer)

  if (scrollProgress.value >= 100) {
    cooldownUntil = now + COOLDOWN_MS
    // Brief 60ms visual completion so the progress bar visibly hits 100% before sliding
    commitTimer = setTimeout(() => {
      commitTimer = null
      goToChapter(nextChapterIdx, 0)
    }, 60)
    return
  }

  decayTimer = setTimeout(() => {
    resetScrollCharge()
  }, DECAY_DELAY_MS)
}

function handleTouchStart(e) {
  if (e.touches.length !== 1) return
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
  isHorizontalTouch = null
}

function handleTouchMove(e) {
  if (e.touches.length !== 1) return
  const dx = touchStartX - e.touches[0].clientX
  const dy = touchStartY - e.touches[0].clientY

  if (isHorizontalTouch === null) {
    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
      isHorizontalTouch = Math.abs(dx) > Math.abs(dy) * 1.2
    }
  }

  if (!isHorizontalTouch) return

  const dir = dx > 0 ? 1 : -1
  const nextIdx = activeChapter.value + dir
  if (nextIdx < 0 || nextIdx >= chapters.length) {
    scrollProgress.value = 0
    return
  }

  scrollDirection.value = dir
  scrollProgress.value = Math.min(
    100,
    Math.round((Math.abs(dx) / (SWIPE_THRESHOLD_PX * 1.4)) * 100)
  )
}

function handleTouchEnd(e) {
  if (!isHorizontalTouch || e.changedTouches.length !== 1) {
    isHorizontalTouch = null
    return
  }
  const dx = touchStartX - e.changedTouches[0].clientX
  const dir = dx > 0 ? 1 : -1
  const nextIdx = activeChapter.value + dir

  if (Math.abs(dx) >= SWIPE_THRESHOLD_PX && nextIdx >= 0 && nextIdx < chapters.length) {
    goToChapter(nextIdx, 0)
  } else {
    resetScrollCharge()
  }
  isHorizontalTouch = null
}

function handleKeyDown(e) {
  if (e.ctrlKey || e.metaKey || e.altKey) return
  const tag = e.target?.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) return

  const key = e.key

  if (key === 'g') {
    const now = Date.now()
    if (now - lastGKeyTime < 400) {
      e.preventDefault()
      lastGKeyTime = 0
      goToChapter(0, 0)
    } else {
      lastGKeyTime = now
    }
    return
  }
  lastGKeyTime = 0

  if (key === 'G') {
    e.preventDefault()
    goToChapter(chapters.length - 1, 0)
    return
  }

  if (key >= '1' && key <= '5') {
    e.preventDefault()
    goToChapter(Number(key) - 1)
    return
  }

  if (key === 'l' || key === 'ArrowRight' || key === 'PageDown') {
    e.preventDefault()
    if (activeChapter.value < chapters.length - 1) {
      goToChapter(activeChapter.value + 1, 0)
    }
    return
  }

  if (key === 'h' || key === 'ArrowLeft' || key === 'PageUp') {
    e.preventDefault()
    if (activeChapter.value > 0) {
      goToChapter(activeChapter.value - 1, 0)
    }
    return
  }

  if (key === 'j' || key === 'ArrowDown') {
    e.preventDefault()
    const count = itemCounts.value[activeChapter.value] || 0
    const currItem = itemIndices.value[activeChapter.value] || 0
    if (count > 0 && currItem < count - 1) {
      itemIndices.value[activeChapter.value] = currItem + 1
    } else if (activeChapter.value < chapters.length - 1) {
      goToChapter(activeChapter.value + 1, 0)
    }
    return
  }

  if (key === 'k' || key === 'ArrowUp') {
    e.preventDefault()
    const count = itemCounts.value[activeChapter.value] || 0
    const currItem = itemIndices.value[activeChapter.value] || 0
    if (count > 0 && currItem > 0) {
      itemIndices.value[activeChapter.value] = currItem - 1
    } else if (activeChapter.value > 0) {
      const prevChap = activeChapter.value - 1
      const prevCount = itemCounts.value[prevChap] || 0
      goToChapter(prevChap, prevCount > 0 ? prevCount - 1 : 0)
    }
    return
  }

  if (key === 'Enter') {
    const action = chapterActions.get(activeChapter.value)
    if (action) {
      e.preventDefault()
      action(itemIndices.value[activeChapter.value] || 0)
    }
  }
}

function mountNavigation() {
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: true })
  window.addEventListener('touchend', handleTouchEnd, { passive: true })
}

function unmountNavigation() {
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
  window.removeEventListener('touchend', handleTouchEnd)
  if (decayTimer) clearTimeout(decayTimer)
  if (commitTimer) clearTimeout(commitTimer)
}

export function useNavigation() {
  return {
    chapters,
    activeChapter,
    activeItemIndex,
    currentChapter,
    targetChapter,
    scrollProgress,
    scrollDirection,
    goToChapter,
    setChapterItemCount,
    setChapterItemIndex,
    registerChapterAction,
    mountNavigation,
    unmountNavigation
  }
}
