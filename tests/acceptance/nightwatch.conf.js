module.exports = {
  test_settings: {
    default: {
      launch_url: "http://localhost:3001", // can be used in our tests
      selenium: {
        start_process: false,
        port: 4444,
        host: "localhost",
      },
    },
    // selenium server and chromedriver are started using docker
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};
