const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
import { terser } from "rollup-plugin-terser";

module.exports = [
  {
    input: "app/_assets/javascripts/application.js",
    output: {
      file: "public/assets/javascripts/application.js",
      format: "iife",
    },
    plugins: [nodeResolve(), commonjs()],
  },
  // site js file (to be replaced)
  {
    input: "app/_assets/javascripts/site.js",
    output: {
      file: "public/assets/javascripts/site.min.js",
    },
    context: "window",
    plugins: [terser()],
  },
];
