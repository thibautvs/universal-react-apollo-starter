import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import Main from './Main'
import '../../vendor/foundation.css'

const App = () => (
  <>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      titleTemplate="Universal React Apollo Starter | %s"
      titleAttributes={{ itemprop: 'name', lang: 'en' }}
      meta={[
        { name: 'description', content: 'Universal React Apollo Starter' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
      link={[{ rel: 'stylesheet', href: '/dist/styles.css' }]}
    />
    <Header />
    <Main />
  </>
)

export default App
