import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'
import theme from './theme'
import { messages } from './intl'
import App from './components/infrastructure/App'

ReactDOM.hydrate(
  <IntlProvider locale="en" messages={messages.en}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root')
)
