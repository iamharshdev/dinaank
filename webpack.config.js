const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  target: ["web", "es5"],
  entry: {
    index: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dinaank.js",
    library: "dinaank",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  plugins: [new CompressionPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
};
