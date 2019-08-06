const webpack = require("webpack");

const config = {
  mode: "production",
  entry: {
    index: "./src/assets/scripts/index.js",
    clean: "./src/assets/scripts/clean.js",
    services: "./src/assets/scripts/services.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  // optimization: {
  //  splitChunks: {
  //   cacheGroups: {
  //   default: false,
  //  vendors: {
  //  filename: "[name].bundle.js"
  //  },
  //commons: {
  // chunks: "all",
  //  name: "common"
  // }
  // }
  //}
  // },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

module.exports = config;
