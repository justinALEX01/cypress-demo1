const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    fixturesFolder: "fixtures",
    baseUrl: "http://automationexercise.com",
    env: {
      email: "sobew94189@inkight.com",
      password: "", // Keep empty or use environment variables for security
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
