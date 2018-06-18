const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const distDir = path.join(__dirname, '../dist')
const srcDir = path.join(__dirname, '../src')

module.exports = [
  {
    name: 'client',
    target: 'web',
    mode: 'development',
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
    devtool: 'source-map',
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
                sourceMap: true
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
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new CopyPlugin([{ from: `${srcDir}/favicon.ico`, to: distDir }])
    ]
  },
  {
    name: 'server',
    target: 'node',
    mode: 'development',
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
                sourceMap: true
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
    plugins: [new CopyPlugin([{ from: `${srcDir}/favicon.ico`, to: distDir }])]
  }
]
