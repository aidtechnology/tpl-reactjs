const presets = ["@babel/preset-env", "@babel/preset-react"];
const plugins = [
  ["@babel/plugin-proposal-class-properties", {}, "class-properties-support"],
  [
    "babel-plugin-module-resolver",
    {
      root: ["./src"],
      alias: {
        "~": "./src"
      }
    }
  ]
];
module.exports = { presets, plugins };
