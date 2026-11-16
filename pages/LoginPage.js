class LoginPage {
  constructor(page) {
    this.page = page;
    this.baseURL = process.env.BASE_URL;

    // Locators
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async open() {
    console.log(`Opening the base URL: ${this.baseURL}`);
    await this.page.goto(this.baseURL);
    console.log(`Login Page successfully opened.`);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
