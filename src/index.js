import React, { Component, PropTypes } from 'react'
import formatTime from './formattime'

class PikaTime extends Component {

  static propTypes = {
    parentCallback: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      time: '00:00'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(event) {
    this.setState({
      time: event.target.value
    })
  }

  inputStyle = {
    'width': '100%',
    'height': '36px',
    'fontSize': '15px',
    'padding': '6px 12px',
    'backgroundColor': '#fff',
    'backgroundImage': 'none',
    'border': '1px solid #ccc',
    'borderRadius': '4px',
    'boxShadow': 'inset 0 1px 1px rgba(0,0,0,.075)',
    'WebkitTransition': 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
    'transition': 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
  }

  handleBlur(event) {
    const formatedTime = formatTime(event.target.value)
    this.setState({
      time: formatedTime
    })
    this.props.parentCallback(formatedTime)
  }

  render() {
    return (
    <input
      style={this.inputStyle}
      name='pickatime'
      value={this.state.time}
      type='text'
      onChange={this.handleChange}
      onBlur={this.handleBlur} />
    )
  }
}

export default PikaTime
