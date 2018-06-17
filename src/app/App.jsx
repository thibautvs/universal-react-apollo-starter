import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import '../styles/styles.css'

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
        <h1>Homepage</h1>
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
        <h1>About</h1>
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
        <h1>Contact</h1>
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
