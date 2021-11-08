module.exports = {
  // paths for test files
  src_folders: ["./tests/acceptance/tdd"],

  test_settings: {
    default: {
      launch_url: "http://localhost:3001",
      selenium: {
        start_process: false,
        port: 4444,
        host: "localhost",
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};
