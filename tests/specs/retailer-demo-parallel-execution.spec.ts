import { test } from 'setup/page-setup';

import { expect } from '@playwright/test';

//If you want to run the tests in parallel, you can use the test.describe.configure() method to set the mode to parallel. By default, tests are run sequentially.
test.describe('Retailerdemo tests success and failures cases', () => {
  test.describe.configure({ mode: 'parallel' });

  test('Retaileremo tests - Successful test', async ({ page }) => {
    //await LoginPage.navigateToRetailerDemoLoginPage();
    //await LoginPage.logInSuccessfully();
    //verification steps

    const headerText = page.getByRole('heading', { name: 'Select How You Would Like To' });
    await expect(headerText).toHaveText('Select How You Would Like To Shop');
  });

  test('Retaileremo tests - Failure test', async ({}) => {
    //await LoginPage.navigateToRetailerDemoLoginPage();
    //await LoginPage.failureLogin();
    //verification steps
  });

  test('test', async ({ page }) => {
    await page.goto('https://uatconnectretailer.kehe.com/');
    await page.goto(
      'https://uat-connect-identity-server.kehe.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dconnect-retailer-web%26redirect_uri%3Dhttps%253A%252F%252Fuatconnectretailer.kehe.com%252Fcallback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520order-management-api%2520kehe-api%2520power-bi-report-api%26state%3Da2e9f025222d42d9827c4bc21e51df85%26code_challenge%3D73pPWWq506qWEiSl8wJQhJy5TRmTHoURQP2Ip3kNUys%26code_challenge_method%3DS256',
    );
    await page.getByPlaceholder('e.g. contact@email.com').click();
    await page.getByPlaceholder('e.g. contact@email.com').fill('moe.ke.he@gmail.com');
    await page.getByPlaceholder('e.g. contact@email.com').press('Enter');
    await page.locator('#password').click();
    await page.locator('#password').fill('password');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.goto(
      'https://uatconnectretailer.kehe.com/callback?code=PYLSIVGHmDcrTkTIzEfFx9UB1Ibvz5cMWDsLd8H0vFU&scope=openid%20profile%20order-management-api%20kehe-api%20power-bi-report-api&state=a2e9f025222d42d9827c4bc21e51df85&session_state=2oKdf2OgLgKcXIb8rJItFVihp-WyJW5JzWrTzkLnOGw.46e28q0dHkrJWPctqAv-zA',
    );
    await page.goto('https://uatconnectretailer.kehe.com/');
    await page.goto('https://uatconnectretailer.kehe.com/lobby');
    await page
      .getByRole('button', {
        name: 'Everyday Ordering  Shop Everyday Order Enter KeHE CONNECT Retailer™ to place your everyday instant order!',
      })
      .click();
    await page.getByLabel('Select').click();
    await page.getByLabel('Filter').fill('kco demo EA');
    await page.getByLabel('Filter').press('Enter');
    await page.getByText('Products', { exact: true }).click();
    await page.waitForTimeout(1000); // Wait for 1 second to ensure the dropdown is visible
    const shopAllDepartmentsLink = await page.waitForSelector('a:has-text("Shop All Departments")');
    await shopAllDepartmentsLink.click();
    await page.getByText('The Number of Results below may not represent the total products available in yo').click();
    await page
      .getByRole('row', { name: /.*\.jpg.*/ })
      .getByRole('button')
      .nth(1)
      .click();
    await page.getByRole('textbox', { name: "e.g. 'Easter Weekend'" }).click();
    await page.getByRole('textbox', { name: "e.g. 'Easter Weekend'" }).fill('Playwright Order');
    //await page.getByRole('textbox', { name: 'e.g. \'Easter Weekend\'' }).press('Tab');
    await page.getByRole('spinbutton', { name: 'e.g. 123456' }).fill('123458976');
    await page.locator('#addToCart').getByRole('button', { name: 'Add' }).click();
    await page.locator('kehe-phoenix-alert span').nth(4).click();
    await page.getByPlaceholder('Search products').click();
    await page.getByPlaceholder('Search products').fill('apple');
    await page.getByPlaceholder('Search products').press('Enter');
    await page.getByText('"apple"').click();
    await page
      .getByRole('row', {
        name: ' https://s3.amazonaws.com/kehe-connect/prod/public_common/catalogimages/200/073490123559.jpg Kedem Juice Apple, 64 FO. 073490123559 | 00031040 Shelf Stable $5.26 ea 8ea = 1cs 0 ea on hand 0 Add',
      })
      .getByRole('button')
      .nth(1)
      .click();
    await page.locator('app-cart-info-new').getByRole('emphasis').first().click();
    await page.getByText('Draft').click();
    await page.getByRole('button', { name: 'Submit Order' }).click();
    await page.locator('#tab-list').getByText('Open').click();
    await page.getByRole('heading', { name: 'Orders' }).click();
    await page.getByTitle('Submitted').getByText('Submitted').click();
    await page.getByRole('link', { name: 'Playwright Order' }).click();
    await page.getByTitle('Account').getByRole('emphasis').click();
    await page.getByText('Logout').click();
  });
});
