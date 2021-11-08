module.exports = {
  // paths for test files
  src_folders: ["./tests/acceptance/tdd"],

  test_settings: {
    default: {
      launch_url: "http://localhost:3001",
      selenium: {
        start_process: true,
        port: 4444,
        server_path: require("selenium-server").path,
      },
    },
    chrome: {
      selenium: {
        cli_args: {
          "webdriver.chrome.driver": require("chromedriver").path,
        },
      },
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};
