const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: "development", //开发环境
    entry: path.resolve(__dirname, "./src/main.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
    },
    module: {
        // loader
    },
    resolve: {
        alias: {
            "@": path.resolve("src")
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        templateContent: `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Webpack App</title>
    </head>
    <body>
    <h1>Hello world</h1>
      <div id="app" />
    </body>
  </html>
      `,
    }),],
    devServer: {
        // contentBase: path.resolve(__dirname, "./dist"),
        port: 8080,
        // publicPath: "/"
        static: {
            directory: path.join(__dirname, "public")
        }
    }
}