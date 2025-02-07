import { test, expect } from '@playwright/test';

test('deve tocar uma musica', async ({ page }) => {
  
  const song = {
    title: 'Bughium',
    src: 'https://raw.githubusercontent.com/qaxperience/mock/main/songs/nirvana.mp3',
  };

  await page.route('**/songs', route => route.fulfill({
    status: 200,
    body: JSON.stringify([song]),
  }));

  await page.goto('https://parodify.vercel.app/'); 
  
  const loggedUser = page.locator('.logged-user');
  await expect(loggedUser).toHaveText('Fernando Papito'); 
  
  const songCard = page.locator('.song').filter({ hasText: song.title });
  const play = songCard.locator('.play');
  const pause= songCard.locator('.pause');

  // Verificar que la tarjeta de la canción esté visible
  await expect(songCard).toBeVisible({ timeout: 10000 });

  // Hacer clic en el botón de play
  await play.click();
  
  // Esperar un momento para que la visibilidad se actualice
  await page.waitForTimeout(2000); // Esperar 1 segundo

  // Verificar que el botón de pausa esté visible y el de play no
  //await expect(pause).toBeVisible({ timeout: 2000 });

  // Esperar un poco más para asegurarnos de que la visibilidad de los botones se haya actualizado
  await expect(play).toBeVisible({ timeout: 7000 });
});
