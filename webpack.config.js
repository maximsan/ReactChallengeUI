var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'inline-source-map',
  entry: { bundle: "./src/index.js" },
  output: {
    path: path.join(__dirname, "dist"),,
    publicPath: "/",
    filename: "[name].[chunkhash].js"
  },
  watch: true,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-1"]
        },
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }), 
    new webpack.DefinePlugin({ //defive windows scope variables for react ensure additional checking in production
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
