const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const users = require('../data/users');
const constants = require('../data/constants');

let loginPage;

test.beforeEach(async ({page})=>{
  loginPage = new LoginPage(page);
});

//test case-1 login sequence
test('user can login with valid credentials @smoke', async ({page})=>{
  await loginPage.open();
  await loginPage.login(users.standardUser.username, users.standardUser.password);
  await expect(page).toHaveURL(constants.urls.inventory);
  await expect(page.locator('.title')).toHaveText(constants.text.productTitle);
});