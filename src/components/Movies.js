import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../theme/Movies.css'

export default class Movies extends Component {



    render() {
        return (

            <Carousel slide={false} id="movieswidth">
                {this.props.weathercards ? this.props.weathercards.map((value, index) =>{
                            return (<Carousel.Item key = {index}>
                                <img className="d-block w-100" src={value.image_url} alt={index} 
                                onError={event => {
                                    event.target.src = "https://image.tmdb.org/t/p/w500/yreqWiQ7IOkXWVB2Tz4LJIs7xqA.jpg"
                                    event.onerror = null}}/>
                                <Carousel.Caption>
                                    <h3>{value.title}</h3>
                                    <p>{value.overview}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
            )
                        }): <p>{this.props.errorMessage2}</p>}
            </Carousel>
        )
    }
}
