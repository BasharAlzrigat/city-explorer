import React, { Component } from 'react'
import '../theme/WeatherDay.css'

export default class WeatherDay extends Component {
  render() {
    return (
      <tr >
        <td>{this.props.value.date}</td>
        <td>{this.props.value.description}</td>
      </tr>
    )
  }
}
