const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")


module.exports = {
    mode: "development", //开发环境
    entry: path.resolve(__dirname, "./src/main.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
    },
    module: {
        // loader
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.tsx?$/, // ts或者tsx
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: ["\\.vue$"],  //用于编译.vue文件中的ts
                    }
                }],
            },
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                type: 'asset',
                generator: { filename: 'img/[contenthash:8][ext][query]' },
            },
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve("src")
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
    },
    plugins: [new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
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
        historyApiFallback: true, // 支持history
        // publicPath: "/"
        static: {
            directory: path.join(__dirname, "public")
        }
    }
}