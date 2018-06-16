var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [
  "axios", "bootstrap", "dreamjs", "jquery", "lodash",
  "popper.js", "react", "react-dom", "react-redux", "redux", "redux-promise"
];

module.exports = {
  devtool: 'inline-source-map',
  entry: { 
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, "dist"), 
    publicPath: "/",
    filename: "[name].[chunkhash].js"
  },
  watch: true,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: "babel-loader",
        test: /\.js$/
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  },
  resolve: {
    extensions: [".", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    inline: true,
    port: 3004,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
