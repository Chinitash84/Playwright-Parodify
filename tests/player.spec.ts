import { test, expect } from '@playwright/test'

test('deve tocar uma musica', async ({ page }) => {

  const song = {
    title : 'Bughium'
  }

  await page.goto('https://parodify.vercel.app/'); // Usa la URL real de tu aplicación

  const loggedUser = page.locator('.logged-user')  // hice click en el usuario Fernando papito y saque este dato loggedUser

  // Expect a title "to contain" a substring.
  await expect(loggedUser).toHaveText('Fernando Papito')

  await page.click('//div[contains(@class, "song")]//h6[text()="Bughium"]/..//button')
  await page.waitForTimeout(5000)
});





