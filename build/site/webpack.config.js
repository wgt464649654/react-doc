const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const basePath = path.resolve(__dirname, '../../');

module.exports = {
  entry: {
    site: path.join(basePath, 'site')
  },
  output: {
    path: path.resolve(basePath, 'dist/site'),
    chunkFilename: '[chunkhash:12].js',
    filename: '[chunkhash:12].js'
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[chunkhash:12].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: path.join(basePath, 'site/assets/favicon.ico')
    })
  ].concat(process.env.TRAVIS_CI ? [] : [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]),
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
    alias: {
        src: path.join(basePath, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: [
        path.join(basePath, 'site'),
        path.join(basePath, 'src'),
        path.join(basePath, 'libs')
      ]
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    }, {
      test: /\.scss$/,
      loaders: [MiniCssExtractPlugin.loader, 'css', 'sass'],
      exclude: /node_modules/
    }, {
      test: /\.less/,
      use: [
          {
              loader: 'style-loader' // creates style nodes from JS strings
          },
          {
              loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                  autoprefixer({
                      browsers: ['last 25 versions'],
                  }),
              ],
           },
          },
          {
              loader: 'less-loader', // compiles Less to CSS
              options: {
                  javascriptEnabled: true,
                  modifyVars: {
                      'primary-color': '#435c71',
                      'link-color': '#435c71',
                      'font-size-base': '12px',
                      'text-color': 'rgba(0, 0, 0, 0.65)'
                  }
              }
          }
      ]
    }, {
      test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
      loader: 'file-loader?name=[hash:12].[ext]'
    }, {
      test: /\.(jpe?g|png|gif)(\?.+)?$/,
      loader: 'url-loader?name=[hash:12].[ext]&limit=25000'
    }, {
      test: /\.md$/,
      loader: 'raw-loader'
    }]
  },
  mode: 'production'
};
