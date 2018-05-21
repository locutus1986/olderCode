const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundled.js"
  },
  module: {
    rules:[
      {
        test:/\.scss$/,
        use: ExtractTextPlugin.extract({
         use:[{
           loader: "css-loader"
         }, {
           loader: "sass-loader"
         }],
         fallback: "style-loader"
       })
     },
     {
       test:/\.js$/,
       exclude: /node_modules/,
       loader: "babel-loader"
     }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
