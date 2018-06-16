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
<<<<<<< HEAD
      template: 'src/index.html'
=======
      template: "src/index.html"
    }),
    new webpack.DefinePlugin({
      //defive windows scope variables for react ensure additional checking in production
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
>>>>>>> ae0636894140488d3e790a9ce31059ecf8e63217
    })
  ]
};
