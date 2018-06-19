import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import homeMessages from '../pages/Home/messages'
import aboutMessages from '../pages/About/messages'

const StyledNav = styled.nav`
  a + a {
    margin-left: 10px;
  }
`

const activeClassName = 'active'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  color: ${props => props.theme.colors.company};
  text-decoration: none;

  &.${activeClassName} {
    text-decoration: underline;
  }
`

const Menu = () => (
  <StyledNav>
    <StyledNavLink to="/" exact activeClassName={activeClassName}>
      <FormattedMessage {...homeMessages.home} />
    </StyledNavLink>
    <StyledNavLink to="/about" activeClassName={activeClassName}>
      <FormattedMessage {...aboutMessages.about} />
    </StyledNavLink>
  </StyledNav>
)

export default Menu
