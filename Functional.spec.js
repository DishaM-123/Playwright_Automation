import { test, expect } from '@playwright/test';
// Trace Viewer if you have any failure in the script
let context
 let page
 test.beforeAll(async ({ browser }) => {
  context = await browser.newContext()
  await context.tracing.start(
    { screenshots: true, 
      snapshots: true 
    })
  page = await context.newPage()
 })
 
 test.afterAll(async () => {
  await context.tracing.stop({ path: 'testfirefox-trace.zip' })
 })
test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('stadard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('stadard_usern');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('stadard_user');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('#item_4_title_link').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis').click();
  await page.locator('#item_4_title_link').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('#item_0_img_link').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('div').filter({ hasText: /^Back to products$/ }).first().click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Ap').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('#item_5_title_link').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="product_sort_container"]').selectOption('za');
  await page.locator('[data-test="product_sort_container"]').selectOption('lohi');
  await page.locator('[data-test="product_sort_container"]').selectOption('hilo');
  await page.locator('a').filter({ hasText: '3' }).click();
  await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('a').filter({ hasText: '3' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').press('CapsLock');
  await page.locator('[data-test="firstName"]').fill('R');
  await page.locator('[data-test="firstName"]').press('CapsLock');
  await page.locator('[data-test="firstName"]').fill('Random');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('T');
  await page.locator('[data-test="lastName"]').press('CapsLock');
  await page.locator('[data-test="lastName"]').fill('Test ');
  await page.locator('[data-test="lastName"]').press('CapsLock');
  await page.locator('[data-test="lastName"]').fill('Test A');
  await page.locator('[data-test="lastName"]').press('CapsLock');
  await page.locator('[data-test="lastName"]').fill('Test Account');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
  await page.getByText('CancelFinish').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.goto('https://www.saucedemo.com/?/inventory.html');
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Reset App State' }).click();
  await page.getByRole('link', { name: 'All Items' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});
