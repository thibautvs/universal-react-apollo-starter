import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import Template from './app/template'
import theme from './theme'
import App from './app/App'

export default function serverRenderer({ clientStats, serverStats }) {
  return (req, res, next) => {
    const context = {}
    const markup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StaticRouter>
    )
    const helmet = Helmet.renderStatic()

    res.status(200).send(
      Template({
        markup: markup,
        helmet: helmet
      })
    )
  }
}
