const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that I am building a bundle for nodejs rather than for the
  // browser
  target: 'node',

  // tell webpack the root file of my server application
  entry: './src/index.js',

  // tells webpack where to put the output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
