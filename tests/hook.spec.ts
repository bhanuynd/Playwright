import {expect, Page, test} from "@playwright/test";
import {Login} from "../pages/login";
import {BasePage} from "../pages/basepage";
import {ReadTestData} from "../pages/read_testdata";

test.beforeEach(async ({page}, testInfo) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('Login_to_application', async ({page}, testInfo) => {
    const testName = testInfo.title
    console.log('Test Name:', testName);
    const readTestData = new ReadTestData()
    let jsonData = await readTestData.parseJSON(testName)
    console.log(jsonData.dummyData.numbers)
    const loginPage = new Login(page, jsonData)
    await loginPage.login(jsonData.username, jsonData.password)
    await page.waitForLoadState("networkidle")
});