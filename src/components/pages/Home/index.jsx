import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { ButtonDemo } from 'toolbox'
import messages from './messages'

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

const HomePage = () => (
  <section>
    <Helmet title="Home" />
    <header>
      <FormattedMessage {...messages.home} />
    </header>
    <ButtonDemo />
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

export default HomePage
