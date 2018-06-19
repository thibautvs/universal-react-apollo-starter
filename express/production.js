/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-dynamic-require */
const express = require('express')
const path = require('path')
const compression = require('compression')
const ClientStatsPath = path.join(__dirname, './../dist/stats.json')
const ServerRendererPath = path.join(__dirname, './../dist/server.js')
const ServerRenderer = require(ServerRendererPath).default
const Stats = require(ClientStatsPath)

const app = express()
const PORT = process.env.PORT || 3000

app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use(ServerRenderer(Stats))
app.use(compression())
app.disable('x-powered-by')

app.listen(PORT, error => {
  if (error) {
    return console.error(error)
  }
  console.log(`Production Express server running at http://localhost:${PORT}`)
})
