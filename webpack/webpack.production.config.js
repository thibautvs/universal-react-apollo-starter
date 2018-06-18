const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const StatsPlugin = require('stats-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

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
      publicPath: '/dist/'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        config: path.join(__dirname, '../config'),
        utils: path.join(__dirname, '../src/utils')
      }
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
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'file-loader',
          query: { name: 'assets/images/[name].[ext]' }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/,
          loader: 'file-loader',
          query: { name: 'assets/fonts/[name].[ext]' }
        }
      ]
    },
    plugins: [
      new CleanPlugin(['dist'], {
        root: path.join(__dirname, '..')
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CopyPlugin([{ from: `${srcDir}/favicon.ico`, to: distDir }])
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        }),
        new OptimizeCssAssetsPlugin({
          cssProcessorOptions: {
            discardUnused: false
          }
        })
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
      publicPath: '/dist/'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        config: path.join(__dirname, '../config'),
        utils: path.join(__dirname, '../src/utils')
      }
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
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'file-loader',
          query: { name: 'assets/images/[name].[ext]' }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/,
          loader: 'file-loader',
          query: { name: 'assets/fonts/[name].[ext]' }
        }
      ]
    },
    plugins: [
      new CleanPlugin(['dist'], {
        root: path.join(__dirname, '..')
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new StatsPlugin('stats.json', {
        chunkModules: true,
        modules: true,
        chunks: true,
        exclude: [/node_modules[\\/]react/]
      }),
      new CopyPlugin([{ from: `${srcDir}/favicon.ico`, to: distDir }])
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        }),
        new OptimizeCssAssetsPlugin({
          cssProcessorOptions: {
            discardUnused: false
          }
        })
      ]
    }
  }
]
