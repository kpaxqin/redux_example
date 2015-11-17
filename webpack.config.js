/**
 * Created by jwqin on 11/15/15.
 */
var path = require('path');
var webpack = require('webpack');
var config = require('config');


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/todos/index.jsx'
  ],
  output: {
    path: path.join(__dirname, '_dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  plugins: [new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.config': JSON.stringify(config)
  })]
};
