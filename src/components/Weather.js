import React, { Component } from 'react'
import WeatherDay from './WeatherDay'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import '../theme/Weather.css'

export default class Weather extends Component {
    render() {
        return (
            <Card className="weatherWidth">
                <Card.Header>The Weather</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.weathercards ? this.props.weathercards.map((value, index) => {
                                    return (
                                            <WeatherDay key={index} value={value} index={index} />
                                    )

                                }) : <tr><td><p>{this.props.errorMessage2}</p></td></tr>}


                            </tbody>
                        </Table>
                    </blockquote>
                </Card.Body>
            </Card>

        )
    }
}


