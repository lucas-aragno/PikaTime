import React, { Component } from 'react'
import PikaTime from 'react-pikatime'

export default class Main extends Component {

  onTimeChange(data) {
    console.warn(data)
  }

  render() {
    return (
    <main>
      <h1>REACT PIKATIME</h1>
      <PikaTime parentCallback={this.onTimeChange.bind(this)} />
    </main>
    )
  }
}
