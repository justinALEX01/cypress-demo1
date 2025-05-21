# Cypress Demo Project 🧪

This is a demo project for end-to-end testing using [Cypress](https://www.cypress.io/). It includes structured test cases, CI/CD integration with GitHub Actions, and environment variable handling for secure test execution.

## 🔧 Tech Stack

- Cypress for E2E testing
- Page Object Model (POM) structure
- GitHub Actions for continuous integration
- Node.js 18 (via setup-node)
- Prettier for code formatting

## 📂 Key Structure

- `cypress/e2e/` – Cypress test files
- `cypress/support/pages/` – Page Objects (e.g. `LoginPage`)
- `.github/workflows/ci.yml` – CI/CD pipeline config
- `.gitignore` – Excludes `node_modules/` and other unnecessary files
- `cypress.config.js` – Cypress project configuration
- `.prettierrc.json` – Prettier formatting rules

## 🚀 How It Works

- Tests are triggered on **push**, **pull request**.
- Secure values like email and password are managed via **GitHub secrets**.
- Test videos and screenshots are uploaded as artifacts after each run.

## 🧪 Run Locally

```bash
npm install
npx cypress open
