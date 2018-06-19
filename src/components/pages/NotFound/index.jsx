import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

const NotFoundPage = () => (
  <section>
    <Helmet title="404" />
    <header>
      <FormattedMessage {...messages.notFound} />
    </header>
  </section>
)

export default NotFoundPage
