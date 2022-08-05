import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../theme/Movies.css'

export default class Movie extends Component {
    render() {
        return (
            
                <><img className="d-block w-100" src={this.props.value.image_url} alt={this.props.index}
                    onError={event => {
                        event.target.src = "https://image.tmdb.org/t/p/w500/yreqWiQ7IOkXWVB2Tz4LJIs7xqA.jpg"
                        event.onerror = null
                    }} />
                <Carousel.Caption>
                    <h3>{this.props.value.title}</h3>
                    <p>{this.props.value.overview}</p>
                </Carousel.Caption></>

        )
    }
}
