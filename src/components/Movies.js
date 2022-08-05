import React, { Component } from 'react'
import Movie from './Movie'
import Carousel from 'react-bootstrap/Carousel';
import '../theme/Movies.css'

export default class Movies extends Component {



    render() {
        return (

            <Carousel slide={false} id="movieswidth">
                {this.props.weathercards ? this.props.weathercards.map((value, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <Movie key={index} value={value} index={index} />
                        </Carousel.Item>
                    )
                }) : <p>{this.props.errorMessage3}</p>}
            </Carousel>
        )
    }
}
