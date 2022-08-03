import React, { Component } from 'react'
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
                                    {/* <th>Low Of</th>
                                    <th>High Of</th> */}
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.weathercards ? this.props.weathercards.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.date}</td>
                                            {/* <td>Mark</td>
                                        <td>Otto</td> */}
                                            <td>{value.description}</td>
                                        </tr>
                                    )

                                }) : <p>No weather data</p>}


                            </tbody>
                        </Table>
                    </blockquote>
                </Card.Body>
            </Card>

        )
    }
}


{/* 
{this.props.weatherArray ? this.props.weatherArray.map(value => {
    return (<div><p>{value.description}</p><p>{value.date}</p></div>)
}): <p>No weather data</p>}
 */}