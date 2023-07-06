import {Locator, Page} from "@playwright/test";

export class Basemodel {
    protected readonly page: Page

    protected constructor(page: Page) {
        this.page = page
    }
}