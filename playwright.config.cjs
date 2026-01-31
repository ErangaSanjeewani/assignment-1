const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
    testDir: "./tests",
    timeout: 120000,
    reporter: 'html',
    use: {
        actionTimeout: 30000,
        navigationTimeout: 60000,
        headless: true,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
