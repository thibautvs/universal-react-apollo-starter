const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const distDir = path.join(__dirname, '../dist')
const srcDir = path.join(__dirname, '../src')

module.exports = [
  {
    name: 'client',
    target: 'web',
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
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true
      })
    ]
  },
  {
    name: 'server',
    target: 'node',
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
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
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
