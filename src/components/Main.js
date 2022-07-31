import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../theme/Main.css'

export default class Main extends Component {


handleSubmit=(e)=>{
    e.preventDefault()
    let url;
    if (e.target.formGridState.value === "US"){
        url=`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${e.target.formGridCity.value}&format=json`
    }else if(e.target.formGridState.value === "EU"){
        url=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${e.target.formGridCity.value}&format=json`
    }else{
        return alert("You didn't choose a region please go and select a region");
    }
    axios.get(url)

}


    render() {
        return (
            <div>
    <Form onSubmit = {(e)=>{this.handleSubmit(e)}}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Region</Form.Label>
          <Form.Select defaultValue="Choose...">
          <option value = "">Select Region</option>
            <option value = "US">United States</option>
            <option value = "EU">Europe</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </div>
        )
    }
}
