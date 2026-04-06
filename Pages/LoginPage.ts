import { Locator, Page } from "@playwright/test";

export class LoginPage{

    readonly page: Page;
    readonly loginLink :Locator;
    readonly usernameField :Locator;
    readonly passwordField :Locator;
    readonly loginBtn :Locator;

    constructor(page: Page){
        this.page = page;
        this.loginLink = page.locator("//a[@id='login2']");
        this.usernameField = page.locator("//input[@id='loginusername']");
        this.passwordField = page.locator("//input[@id='loginpassword']");
        this.loginBtn = page.locator("//button[@onclick='logIn()']");
        }

        async login(username: string, password: string){
            await this.loginLink.click();
            await this.usernameField.fill(username);
            await this.passwordField.fill(password);
            await this.loginBtn.click();
        }
}