const express = require('express')
const path = require('path')
const webpack = require('webpack')
const config = require('./../webpack/webpack.development.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

const app = express()
const compiler = webpack(config)
const PORT = process.env.PORT || 3000

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/dist/'
  })
)
app.use(
  webpackHotMiddleware(
    compiler.compilers.find(compiler => compiler.name === 'client')
  )
)
app.use(webpackHotServerMiddleware(compiler))

app.listen(PORT, error => {
  if (error) {
    return console.error(error)
  } else {
    console.log(`Development server running at http://localhost:${PORT}`)
  }
})
