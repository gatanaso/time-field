module.exports = {
  verbose: false,
  plugins: {
    istanbul: {
      dir: "./coverage",
      reporters: ["text-summary", "lcov"],
      include: ["**/time-field*.js"],
      exclude: [],
      thresholds: {
        global: {
          statements: 100
        }
      }
    },
    local: {
      browsers: ["chrome"]
    }
  }
};
