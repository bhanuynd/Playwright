import {BasePage} from "./basepage";
import {Locator, Page} from "@playwright/test";
import {LoginModel} from "./models/login.model";
import {LoginData} from "./data/login.data";

export class Login extends BasePage<LoginModel> {
    constructor(page: Page, data: LoginData) {
        const model = new LoginModel(page);
        super(page, model);
    }

    async login(username: string, password: string) {
        await this.page.waitForLoadState("networkidle")
        await this.model.username_textbox.waitFor({state: 'visible'})
        await this.fill(this.model.username_textbox, username)
        await this.fill(this.model.password_textbox, username)
        await this.click(this.model.submitButton)
    }
}