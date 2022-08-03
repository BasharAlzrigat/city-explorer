import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import '../theme/Results.css'

export default class Results extends Component {
  render() {
    return (
      <Card style={{ width: '40%' }}>
        <Card.Header>{this.props.displayName}</Card.Header>
        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.props.latitude},${this.props.longitude}&zoom=1-18`} />
        <ListGroup variant="flush">
          <ListGroup.Item>latitude: {this.props.latitude}</ListGroup.Item>
          <ListGroup.Item>longitude: {this.props.longitude}</ListGroup.Item>
          <ListGroup.Item>class: <img alt='' src={this.props.classIcon} />{' '}{this.props.class}</ListGroup.Item>
          <ListGroup.Item>type: <Badge bg="primary">{this.props.type}</Badge></ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}