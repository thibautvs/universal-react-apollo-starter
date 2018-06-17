const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const StatsPlugin = require('stats-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const distDir = path.join(__dirname, '../dist')
const srcDir = path.join(__dirname, '../src')

module.exports = [
  {
    name: 'client',
    target: 'web',
    mode: 'production',
    entry: `${srcDir}/client.jsx`,
    output: {
      path: distDir,
      filename: 'client.js',
      publicPath: distDir
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules\/)/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new CleanWebpackPlugin(distDir),
      new webpack.optimize.OccurrenceOrderPlugin()
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        }),
        new OptimizeCssAssetsPlugin({})
      ]
    }
  },
  {
    name: 'server',
    target: 'node',
    mode: 'production',
    entry: `${srcDir}/server.jsx`,
    output: {
      path: distDir,
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: distDir
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules\/)/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'isomorphic-style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new StatsPlugin('stats.json', {
        chunkModules: true,
        modules: true,
        chunks: true,
        exclude: [/node_modules[\\\/]react/]
      })
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        }),
        new OptimizeCssAssetsPlugin({})
      ]
    }
  }
]
