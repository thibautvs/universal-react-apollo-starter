const path = require('path')
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
      path: path.join(__dirname, 'dist'),
      filename: 'client.js',
      publicPath: '/dist/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
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
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      })
    ]
  },
  {
    name: 'server',
    target: 'node',
    mode: 'development',
    entry: `${srcDir}/server.jsx`,
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/dist/'
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
    }
  }
]
