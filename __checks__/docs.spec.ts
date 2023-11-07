import { test, expect } from '@playwright/test'
import { ChecklySitePage } from './poms/ChecklySitePage'

test('homepage', async ({ page }) => {
  const checklyPage = new ChecklySitePage(page)
  await checklyPage.goto('/docs')
  await checklyPage.screenshot('docs')
  expect(await page.title()).toEqual('Introduction to Checkly | Checkly')
  await expect(page).toHaveScreenshot('docs_home.png')
})
