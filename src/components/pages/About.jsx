import React from 'react'
import Helmet from 'react-helmet'
import CONFIG from 'config/environment'

const AboutPage = () => (
  <section>
    <Helmet title="About" />
    <header>About</header>
    <p>API URL: {CONFIG.apiURL}</p>
  </section>
)

export default AboutPage
