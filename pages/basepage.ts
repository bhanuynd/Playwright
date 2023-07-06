import {Locator, Page} from '@playwright/test';
import {Basemodel} from "./models/basemodel";
import * as fs from "fs";
import {LoginModel} from "./models/login.model";
import {LoginData} from "./data/login.data";

export abstract class BasePage<M extends Basemodel> {
    protected page: Page;
    readonly model: M;

    protected constructor(page: Page, model: M) {
        this.page = page;
        this.model = model;
    }

    async click(locator: Locator) {
        await locator.click()
    }

    async fill(locator: Locator, text: string) {
        await locator.fill(text)
    }

}