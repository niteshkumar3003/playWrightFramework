import test, { expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import credential  from "../testdata/credential.json";

let loginPage: LoginPage | null;

test.beforeEach(async ({ page }) => {

    await page.goto("https://www.demoblaze.com/index.html");
});

test("Login test:",async({page},testInfo)=>{
    //const loginPage = new LoginPage(page);

    for(const value of credential.users){
        if(loginPage === null || loginPage === undefined){
            loginPage = new LoginPage(page);
        }
        await loginPage.login(value.username, value.password);
        expect(await page.locator("//a[@id='logout2']")).toHaveText("Log out");
       
        
    }

});

test.afterEach(async ({ page },testInfo) => {
    if(testInfo.status === "failed"){
        let time = new Date().toISOString().replace(/:/g, "-");
        await page.screenshot(
            {
                path: `screenshots/${testInfo.title.replace(/[" "]/g, "")}+${time}.png`,
                fullPage: true
            }
        )
    }
});