import React, { Component } from 'react'
import PIKATIME from 'react-pikatime'

export default class Main extends Component {

  onTimeChange(data) {
    console.warn(data)
  }

  render() {
    return (
    <main>
      <h1>REACT PIKATIME</h1>
      <PIKATIME parentCallback={this.onTimeChange.bind(this)} />
    </main>
    )
  }
}
