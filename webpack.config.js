const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/bundle.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          context: './src/',
          from: '**/*.html',
          to: './',
          force: true
        },
        {
          context: './src/',
          from: '**/*.css',
          to: './',
          force: true
        },
        {
          context: './src/',
          from: 'assets',
          to: './assets',
          force: true
        }
      ],
      {
        copyUnmodified: true
      }
    )
  ]
};
