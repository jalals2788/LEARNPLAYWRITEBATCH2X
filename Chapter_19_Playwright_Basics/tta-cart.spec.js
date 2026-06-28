const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abc');

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('abcbc');

  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click({ button: 'right' });

  const errorMessage = await page.locator('[data-test="error"]').textContent();
  console.log('Error message:', errorMessage);

  await browser.close();
})();
