import React from 'react'
import { FormattedMessage } from 'react-intl'
import Menu from './Menu'
import messages from '../../messages'

const Header = () => (
  <header>
    <FormattedMessage {...messages.hello} />
    <Menu />
  </header>
)

export default Header
