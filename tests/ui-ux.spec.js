import { test, expect } from '@playwright/test'

const ARTIFACT_DIR = '/home/minh/.gemini/antigravity-cli/brain/be84b803-7390-4bc7-8490-c5e4ce97167d'

test.describe('whoami — Swiss Editorial Single-Viewport UI/UX', () => {
  test('1. Default Anti-Glare Light Mode, Dark Mode Toggle, and Zero Document Scrollbar', async ({
    page
  }) => {
    await page.goto('/')

    const html = page.locator('html')
    await expect(html).toHaveClass(/light/)

    const bodyStyles = await page.evaluate(() => {
      const style = window.getComputedStyle(document.body)
      return {
        bg: style.backgroundColor,
        overflow: style.overflow,
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight,
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth
      }
    })

    expect(bodyStyles.bg).toBe('rgb(246, 245, 241)')
    expect(bodyStyles.overflow).toBe('hidden')
    expect(bodyStyles.scrollHeight).toBe(bodyStyles.innerHeight)
    expect(bodyStyles.scrollWidth).toBe(bodyStyles.innerWidth)

    await page.screenshot({ path: `${ARTIFACT_DIR}/real_ch01_light.png` })

    // Toggle to Dark Mode (#111110 -> rgb(17, 17, 16))
    await page.getByTestId('theme-toggle').click()
    await expect(html).toHaveClass(/dark/)
    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(17, 17, 16)')

    await page.screenshot({ path: `${ARTIFACT_DIR}/real_ch01_dark.png` })

    // Switch back to Light Mode
    await page.getByTestId('theme-toggle').click()
    await expect(html).toHaveClass(/light/)
    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(246, 245, 241)')
  })

  test('2. Vim Keyboard Navigation (l/h, 1-5, j/k row selection, category reset, gg/G)', async ({
    page
  }) => {
    await page.goto('/')
    const counter = page.getByTestId('chapter-counter')
    await expect(counter).toHaveText('01 / 05')

    await page.keyboard.press('l')
    await expect(counter).toHaveText('02 / 05')
    await page.waitForTimeout(550)
    await page.screenshot({ path: `${ARTIFACT_DIR}/real_ch02_light.png` })

    await page.keyboard.press('3')
    await expect(counter).toHaveText('03 / 05')
    await page.waitForTimeout(550)

    const activeTitle = page.getByTestId('active-project-title')
    await expect(activeTitle).toHaveText('E-Commerce Sync & Batch Platform')
    await page.screenshot({ path: `${ARTIFACT_DIR}/real_ch03_light.png` })

    await page.keyboard.press('j')
    await expect(activeTitle).toHaveText('Enterprise Contract & Document System')

    await page.keyboard.press('j')
    await page.keyboard.press('j')
    await page.keyboard.press('j')
    await expect(activeTitle).toHaveText('whoami - Personal Portfolio')

    await page.getByTestId('filter-Company Work').click()
    await expect(activeTitle).toHaveText('E-Commerce Sync & Batch Platform')

    await page.getByTestId('filter-All').click()

    await page.keyboard.press('4')
    await expect(counter).toHaveText('04 / 05')
    await page.waitForTimeout(550)
    await page.screenshot({ path: `${ARTIFACT_DIR}/real_ch04_light.png` })

    await page.keyboard.press('G')
    await expect(counter).toHaveText('05 / 05')
    await page.waitForTimeout(550)
    await page.screenshot({ path: `${ARTIFACT_DIR}/real_ch05_light.png` })

    await page.keyboard.press('g')
    await page.keyboard.press('g')
    await expect(counter).toHaveText('01 / 05')
  })

  test('3. Discrete Mouse Wheel (2-Notch Smooth Charge) & Touchpad Inertia Cooldown', async ({
    page
  }) => {
    await page.goto('/')
    const counter = page.getByTestId('chapter-counter')
    const topProgress = page.getByTestId('top-scroll-progress')

    await expect(counter).toHaveText('01 / 05')

    // Notch 1 (100px discrete mouse wheel) -> charges to exactly 50% and holds for normal human pause (300ms)
    await page.mouse.wheel(0, 100)
    await page.waitForTimeout(300)
    const partialWidth = await topProgress.evaluate((el) => el.style.width)
    expect(partialWidth).toBe('50%')
    await expect(counter).toHaveText('01 / 05')

    // Wait past decay window (650ms total) -> resets cleanly to 0%
    await page.waitForTimeout(420)
    const decayedWidth = await topProgress.evaluate((el) => el.style.width)
    expect(decayedWidth).toBe('0%')

    // Two normal mouse-wheel notches (250ms apart) -> switches cleanly to 02 / 05, while blocking extra inertia
    await page.mouse.wheel(0, 100)
    await page.waitForTimeout(200)
    await page.mouse.wheel(0, 100)
    // Extra inertia events immediately after:
    await page.mouse.wheel(0, 100)
    await page.mouse.wheel(0, 100)

    await expect(counter).toHaveText('02 / 05')
  })

  test('4. Mobile Responsive Layout (390x844) & Horizontal Touch Swipe Navigation', async ({
    page
  }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')

    const counter = page.getByTestId('chapter-counter')
    await expect(counter).toHaveText('01 / 05')

    // Verify no horizontal overflow on mobile viewport
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth
    }))
    expect(dimensions.scrollWidth).toBe(dimensions.innerWidth)

    await page.screenshot({ path: `${ARTIFACT_DIR}/mobile_ch01_light.png` })

    // Simulate horizontal touch swipe left (from x=320 to x=120) to advance to 02 / 05
    await page.evaluate(() => {
      const dispatchTouch = (type, x, y) => {
        const touchObj = new window.Touch({
          identifier: 1,
          target: document.body,
          clientX: x,
          clientY: y
        })
        const touchEvent = new window.TouchEvent(type, {
          cancelable: true,
          bubbles: true,
          touches: type === 'touchend' ? [] : [touchObj],
          targetTouches: type === 'touchend' ? [] : [touchObj],
          changedTouches: [touchObj]
        })
        window.dispatchEvent(touchEvent)
      }
      dispatchTouch('touchstart', 320, 400)
      dispatchTouch('touchmove', 200, 402)
      dispatchTouch('touchend', 120, 405)
    })

    await expect(counter).toHaveText('02 / 05')

    // Tap '03' in mobile navbar to view Selected Work on mobile
    await page.getByTestId('nav-chapter-03').click()
    await expect(counter).toHaveText('03 / 05')
    await page.waitForTimeout(550)
    await page.screenshot({ path: `${ARTIFACT_DIR}/mobile_ch03_light.png` })
  })
})
