import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Switch, Route, NavLink } from 'react-router-dom'
import CONFIG from 'config/environment'
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

const Menu = () => (
  <article>
    <ul>
      <li>
        <NavLink exact to="/">
          Homepage
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </article>
)

const HomePage = () => (
  <section>
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
  </section>
)

const AboutPage = () => (
  <section>
    <Helmet title="About" />
    <Menu />
    <StyledHeader>About</StyledHeader>
    <p>API URL: {CONFIG.apiURL}</p>
  </section>
)

const NotFoundPage = () => (
  <section>
    <Helmet title="Not found" />
    <Menu />
    <header>404</header>
  </section>
)

const App = () => (
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
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default App
