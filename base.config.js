const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HOST = "localhost";
const PORT = 3008;

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: "main/js/[name].[hash:4].js",
        chunkFilename: "main/js/[name].[hash:4].chunk.js",
        publicPath: "/"
    },
    devServer: {
        contentBase: path.join(process.cwd(), 'dist'),
        hot: true,
        host: HOST,
        port: PORT,
        compress: true,
        historyApiFallback: true,
        clientLogLevel: 'debug',
        watchOptions: {
            poll: true,
            ignored: /node_modules/
        },
    },
    module: {
        rules: [
            {
                use: ['babel-loader'],
                test: /\.js$/
            },
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "main/css/[name].[hash:4].css"
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
}