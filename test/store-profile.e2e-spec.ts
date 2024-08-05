import { expect, test } from '@playwright/test'

test('edit profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizzaria Italiana' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Pizzaria Top')
  await page.getByLabel('Descrição').fill('Pizzaria mais top da cidade')

  await page.getByRole('button', { name: 'Salvar' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()
  await page.waitForLoadState('networkidle')

  const button = page.getByRole('button', { name: 'Pizzaria Top' })

  await expect(button).toBeVisible()
})

test('failed edit profile', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizzaria Italiana' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Pizzaria Muito Ruim')
  await page.getByLabel('Descrição').fill('Pior pizzaria da cidade')

  await page.getByRole('button', { name: 'Salvar' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Falha ao atualizar o perfil, tente novamente!')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()
  await page.waitForLoadState('networkidle')

  const button = page.getByRole('button', { name: 'Pizzaria Italiana' })

  await expect(button).toBeVisible()
})
