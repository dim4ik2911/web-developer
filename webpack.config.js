const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/i,
        //when one loader use loader when more then use "use"
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        loader: "url-loader",
        test: /\.png$/i,
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 8080,
  },
};
