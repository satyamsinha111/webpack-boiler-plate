const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/dist/",
    filename: "main.js",
    publicPath: "/dist",
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 9000,
    publicPath: "/index.html",
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.html?$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
              attributes: {
                root: ".",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new OpenBrowserPlugin({ url: "http://localhost:9000" })],
};
