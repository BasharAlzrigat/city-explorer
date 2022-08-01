import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../theme/Explore.css'

export default class Main extends Component {
render() {
        return (
            <div id="exploreContainer">
                <Form onSubmit={(e) => { this.props.handleSubmit(e) }}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Search</Form.Label>
                            <Form.Control placeholder="Anything"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Region</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option value="">Select Region</option>
                                <option value="US">United States</option>
                                <option value="EU">Europe</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <span id="buttons">
                    <Button variant="success" type="submit">
                        Explore!
                    </Button>
                    <Button variant="primary" onClick={()=>window.location.reload()}>
                        Clear Result!
                    </Button>
                    </span>
                </Form>
            </div>
        )
    }
}
