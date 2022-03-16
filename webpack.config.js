var glob = require('glob');
var path = require('path');

module.exports = {
  mode: 'production',
  entry: glob.sync('./src/simulations/**.js').reduce(function (obj, el) {
    obj[path.parse(el).name] = el;
    return obj;
  }, {}),
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  stats: {
    colors: true,
    warnings: false,
  },
  target: 'web',
  externals: /k6(\/.*)?/,
  devtool: 'source-map',
};
