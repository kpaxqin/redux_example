var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var devserver = config.devserver;
var serverUrl = devserver.hostname + ':' + devserver.port;
config.entry.unshift(
  'webpack-dev-server/client?http://' + serverUrl, // WebpackDevServer host and port
  'webpack/hot/only-dev-server'// "only" prevents reload on syntax errors
);
config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(devserver.port, devserver.hostname, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://' + serverUrl);
});