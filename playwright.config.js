// @ts-check
const { defineConfig, devices } = require('@playwright/test')

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });
require('dotenv').config()

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  timeout: 240000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
   reporter: [
     ['html'],   
     ['list'],
      ['allure-playwright'] ,
     ['junit', { outputFile: 'results.xml' }]]    ,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    headless: false,
    video: {
      mode: 'retain-on-failure',
      size: { width: 640, height: 480 },
    },
    /* Screenshot options to set for each test. See https://playwright.dev/docs/screenshots */
    screenshot: 'only-on-failure',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
  geolocation: { latitude: 52.52, longitude: 13.39 },
  permissions: ['geolocation'],

  },
  /* Configure projects for major browsers */
  projects: [
    // Setup project
    {
      name: 'setup',
      testMatch: '*.setup.ts',
      //testMatch: 'ordercreate.spec.ts',
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome', storageState: './.auth/loginauth.json' },
      //dependencies: ['setup'],
    },
     {
     name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: './.auth/loginauth.json' },
      //dependencies: ['setup'],

     },

   {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
    //dependencies: ['setup'],
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome', storageState: './.auth/loginauth.json' },
    //   dependencies: ['setup'],
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})