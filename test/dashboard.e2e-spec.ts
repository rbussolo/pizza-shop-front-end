import { expect, test } from '@playwright/test'

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 5.285,97')).toBeVisible()
  await expect(page.getByText('-9% em relação ao mês passado')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('87')).toBeVisible()
  await expect(page.getByText('+2% em relação ao mês passado')).toBeVisible()
})

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('54')).toBeVisible()
  await expect(page.getByText('+3% em relação a ontem')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('30')).toBeVisible()
  await expect(page.getByText('+15% em relação ao mês passado')).toBeVisible()
})
