import { Page } from "@playwright/test";

export class ProfilePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForURL() {
    await this.page.waitForURL("https://demoqa.com/profile");
  }

  // async saveUserID() {
  //   const cookies = await this.page.context().cookies();
  //   const userID = cookies.find((c) => c.name === "userID");
  //   if (userID) {
  //     return userID.value;
  //   } else {
  //     return null;
  //   }
  // }

  // async saveToken() {
  //   const cookies = await this.page.context().cookies();
  //   const token = cookies.find((c) => c.name === "token");
  //   if (token) {
  //     return token.value;
  //   } else {
  //     return null;
  //   }
  // }

  async goTo() {
    await this.page.goto("https://demoqa.com/profile");
  }

  async clickBookStoreButton() {
    await this.page.locator('.text:text-is("Book Store")').click();
  }
}