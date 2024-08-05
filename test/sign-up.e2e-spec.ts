import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizzaria Italiana')
  await page.getByLabel('Seu nome').fill('Rodrigo Bussolo')
  await page.getByLabel('Seu e-mail').fill('rbussolo91@gmail.com')
  await page.getByLabel('Seu celular').fill('(65) 99681-0181')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  await expect(toast).toBeVisible()
})

test('sign up returning an error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizzaria Triste')
  await page.getByLabel('Seu nome').fill('Rodrigo Bussolo')
  await page.getByLabel('Seu e-mail').fill('rbussolo91@gmail.com')
  await page.getByLabel('Seu celular').fill('(65) 99681-0181')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar o restaurante!')

  await expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
