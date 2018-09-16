const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const constants = require('../common/constants');

const { dev, prod } = constants.environments;

const env = process.env.NODE_ENV || dev;
const isProduction = env === prod;

module.exports = {
  mode: isProduction ? prod : dev,
  entry: {
    main: path.resolve('./src/app.tsx'),
  },
  output: {
    filename: 'scripts/bundle.js',
    path: path.resolve('./build/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              localIdentName: isProduction
                ? '[hash:base64]'
                : '[local]--[hash:base64:5]',
            },
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  performance: {
    hints: false
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve('./src'),
  },
  plugins: [
    new CopyWebpackPlugin([ { from: path.resolve('./public/'), to: path.resolve('./build') } ]),
    new CopyWebpackPlugin([ { from: path.resolve('./src/index.html'), to: path.resolve('./build') } ]),
  ]
};
