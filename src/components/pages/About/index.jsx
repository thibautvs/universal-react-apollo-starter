import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import CONFIG from 'config/environment'
import messages from './messages'

const AboutPage = () => (
  <section>
    <Helmet title="About" />
    <header>
      <FormattedMessage {...messages.about} />
    </header>
    <p>API URL: {CONFIG.apiURL}</p>
  </section>
)

export default AboutPage
