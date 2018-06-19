import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ThemeProvider, ServerStyleSheet } from 'styled-components'
import { IntlProvider } from 'react-intl'
import { Helmet } from 'react-helmet'
import { messages } from './intl'
import Template from './template'
import theme from './theme'
import App from './components/infrastructure/App'

export default function serverRenderer() {
  return (req, res) => {
    const context = {}
    const componentTree = (
      <IntlProvider locale="en" messages={messages.en}>
        <StaticRouter location={req.url} context={context}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StaticRouter>
      </IntlProvider>
    )
    const sheet = new ServerStyleSheet()
    const markup = ReactDOMServer.renderToString(
      sheet.collectStyles(componentTree)
    )
    const styles = sheet.getStyleTags()
    const helmet = Helmet.renderStatic()

    if (context.url) {
      res.writeHead(301, { Location: context.url })
      res.end()
    } else {
      res.send(Template({ markup, styles, helmet }))
    }
  }
}
