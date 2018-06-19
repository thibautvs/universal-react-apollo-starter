import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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
      Home
    </StyledNavLink>
    <StyledNavLink to="/about" activeClassName={activeClassName}>
      About
    </StyledNavLink>
  </StyledNav>
)

export default Menu
