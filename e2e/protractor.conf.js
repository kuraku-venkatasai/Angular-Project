// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");

const HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");

const reporter = new HtmlScreenshotReporter({
  dest: "target/screenshots",
  filename: "my-report.html",
  showSummary: true,
  reportTitle: "Angular E2E Test",
});

const unitReportor = new SpecReporter({
  // @ts-ignore
  spec: { displayStacktrace: true },
});

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  chromeDriver: process.env.CHROMEDRIVER_PATH || undefined,
  allScriptsTimeout: 11000,
  specs: ["./src/**/*.e2e-spec.ts"],
  capabilities: {
    browserName: "chrome",
    'chromeOptions': {
      'args': [ '--headless', '--no-sandbox', '--use-gl=swiftshader']
    }
  },
  directConnect: true,
  // SELENIUM_PROMISE_MANAGER: false,
  baseUrl: "http://localhost:4200/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },

  // Setup the report before any tests start
  beforeLaunch() {
    return new Promise(resolve => {
      reporter.beforeLaunch(resolve);
    });
  },
 // Assign the test reporter to each running instance
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
    // jasmine.getEnv().addReporter(new SpecReporter({
    //   spec: {
    //     displayStacktrace: StacktraceOption.PRETTY
    //   }
    // }));
    // @ts-ignore
    jasmine.getEnv().addReporter(unitReportor);
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch(exitCode) {
    return new Promise((resolve) => {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
};
