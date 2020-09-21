// Module name mappings
// https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  testEnvironment: "node",
  modulePaths: ["node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  setupFiles: ["./src/setupTests.js"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      babelConfig: ".babelrc.js"
    }
  }
};
