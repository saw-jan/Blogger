module.exports = {
  // paths for test files
  src_folders: ["./tests/acceptance/tdd"],

  test_settings: {
    default: {
      launch_url: "http://localhost:3001", // will be used in our tests
      webdriver: {
        start_process: true, // starts webdriver process automatically
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
      },
      webdriver: {
        port: 4444,
        server_path: require("chromedriver").path,
      },
    },
  },
};
