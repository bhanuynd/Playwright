import {Locator, Page} from "@playwright/test";
import {Basemodel} from "./basemodel";

export class LoginModel extends Basemodel{
    protected readonly page: Page
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        super(page)
        this.username_textbox = page.locator('[name="username"]')
        this.password_textbox = page.locator('[name="password"]')
        this.submitButton = page.locator('[type="submit"]')
    }
}