const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'main': './src/index.js',
    'layouts': './src/layouts/index.js',
    'hooks': './src/hooks/index.js',
    'form-items': './src/form-items/index.js',
    'buttons': './src/buttons/index.js',
    'screens': './src/screens/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: 'song-essay-shared',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'copy', to: '' }
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'vendors',
      chunks: 'all',
    },
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  devtool: 'inline-source-map',
};