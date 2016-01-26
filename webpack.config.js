//const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:4445',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'react-hot!babel',
      exclude: /node_modules/,
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }, 
  devServer: {
    contentBase: './dist',
    hot: true
  }, 
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]   
};