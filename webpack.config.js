const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [],
  optimization: {
    minimize: true
  }
};
