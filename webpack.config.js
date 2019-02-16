module.exports = {
  devtool: 'inline-source-map',
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  watch: true,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        test: /\.(js|jsx)$/
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
  }
};
