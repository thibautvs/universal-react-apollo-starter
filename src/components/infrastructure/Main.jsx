import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import AboutPage from '../pages/About'
import NotFoundPage from '../pages/NotFound'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </main>
)

export default Main
