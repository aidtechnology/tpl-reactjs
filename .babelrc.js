const presets = [
  "@babel/preset-react",
  "@babel/preset-env"
];
const plugins = [
  ["babel-plugin-module-resolver", {
    root: ["./src"],
    alias: {
      "~": "./src"
    }
  }]
];
module.exports = { presets, plugins };
