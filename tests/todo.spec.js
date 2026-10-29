import { test, expect } from '@playwright/test';

test('test @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').fill('');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Buy Grocery');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Go for walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Play');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Go for walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Rest' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Go for walk' }).getByTestId('todo-item-toggle').uncheck();
  await page.getByRole('listitem').filter({ hasText: 'Buy Grocery' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: 'Play' }).getByTestId('todo-item-toggle')).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('Go for walk');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
//   await expect(page.locator('.todo-list')).toHaveCount(2);
});