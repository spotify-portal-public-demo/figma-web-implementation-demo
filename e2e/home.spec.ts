import { expect, test } from '@playwright/test';

test('loads the local implementation canvas and supports interaction', async ({
  page,
}) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Design implementation canvas',
    }),
  ).toBeVisible();

  await page.getByRole('button', { name: 'Verify interaction' }).click();
  await expect(page.getByRole('status')).toHaveText(
    'Verified interactions: 1',
  );
});
