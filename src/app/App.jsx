import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import '../vendor/foundation.css'

const StyledHeader = styled.h1`
  color: ${props => props.theme.colors.company};
`

const GridContainer = styled.div`
  div {
    div:nth-child(odd) {
      background-color: #7ec2ed;
    }

    div:nth-child(even) {
      background-color: #207ab8;
    }
  }
`

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact to={'/'}>
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

class Homepage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <Menu />
        <StyledHeader>Homepage</StyledHeader>
        <p>Zurb Foundation Grid demo</p>
        <GridContainer>
          <div className="grid-x">
            <div className="cell">full width cell</div>
            <div className="cell">full width cell</div>
          </div>
          <div className="grid-x">
            <div className="cell small-6">6 cells</div>
            <div className="cell small-6">6 cells</div>
          </div>
          <div className="grid-x">
            <div className="cell medium-6 large-4">12/6/4 cells</div>
            <div className="cell medium-6 large-8">12/6/8 cells</div>
          </div>
        </GridContainer>
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <Helmet title="About" />
        <Menu />
        <StyledHeader>About</StyledHeader>
      </div>
    )
  }
}

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet title="Contact" />
        <Menu />
        <StyledHeader>Contact</StyledHeader>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
          titleTemplate="Universal React Apollo Starter | %s"
          titleAttributes={{ itemprop: 'name', lang: 'en' }}
          meta={[
            { name: 'description', content: 'Universal React Apollo Starter' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ]}
          link={[{ rel: 'stylesheet', href: '/dist/styles.css' }]}
        />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}
