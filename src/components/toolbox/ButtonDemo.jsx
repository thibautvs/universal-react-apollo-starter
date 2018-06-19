import React, { Component } from 'react'

class ButtonDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Click me' }
  }

  handleClick() {
    this.setState({ text: 'Clicked' })
  }

  render() {
    return <button onClick={::this.handleClick}>{this.state.text}</button>
  }
}

export default ButtonDemo
