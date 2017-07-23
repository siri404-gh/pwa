const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const variables = require('./variables');

module.exports = {
  entry: {
    app: ['react-hot-loader/patch', variables.entry],
  },
  output: {
    path: path.resolve(__dirname, variables.dist),
    filename: '[name].bundle.js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },

  plugins: [
    new CleanWebpackPlugin([variables.dist, variables.prod]),
  ],

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015'] } },
      { test: /\.css$/, use: ['style-loader', 'css-loader?modules', 'postcss-loader',] },
      // {test: /bootstrap\/js\//, loader: 'imports-loader?jQuery=jquery' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
      { test: /^((?!config).)*\.js?$/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory' },
      { test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/, loader: 'file-loader', exclude: /node_modules/ }
    ]
  },
  stats: {
    warnings: false
  }
}
