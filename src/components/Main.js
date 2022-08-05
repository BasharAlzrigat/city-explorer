import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Explore from './Explore'
import Weather from './Weather'
import Movies from './Movies'
import Results from './Results'
import Swal from 'sweetalert2'
import '../theme/Main.css'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: '',
            weatherObj: '',
            MoviesObj: '',
            displayError1: false,
            displayError2: false,
            displayError3: false,
            errorMessage1: "",
            errorMessage2: "",
            errorMessage3: "",
            lon: '',
            lat: ''
        }
    }
    getWeatherData = async (lat, lon) => {
        try {
            let WeatherData = await axios.get(`http://localhost:3001/weatherbit?&lat=${lat}&lon=${lon}`)
            console.log(WeatherData.data);
            this.setState({
                weatherObj: WeatherData.data,
                displayError2: false
            })



        } catch (error) {
            console.log(error);
            this.setState({
                weatherObj: '',
                displayError2: true,
                errorMessage2: error.response.status + ':' + error.response.data
            })
        }

    }
    getMoviesData = async (searchQuery) => {
        try {
            let MoviesData = await axios.get(`http://localhost:3001/movies?searchQuery=${searchQuery}`)
            console.log(MoviesData.data);
            this.setState({
                MoviesObj: MoviesData.data,
                displayError3: false
            })
            this.getWeatherData(this.state.lat, this.state.lon);



        } catch (error) {
            console.log(error);
            this.setState({
                MoviesObj: '',
                displayError3: true,
                errorMessage3: error.response.status + ':' + error.response.data
            })
        }

    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let url1;
        if (e.target.formGridState.value === "US" && e.target.formGridCity.value !== "") {
            url1 = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${e.target.formGridCity.value}&format=json`
        } else if (e.target.formGridState.value === "EU" && e.target.formGridCity.value !== "") {
            url1 = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${e.target.formGridCity.value}&format=json`
        } else if (e.target.formGridState.value === "") {
            return Swal.fire('You Must Select a Region')
        } else if (e.target.formGridCity.value === "") {
            return Swal.fire('You Must Enter Something To Search')
        }
        try {
            let fullData = await axios.get(url1)
            console.log(fullData.data[0]);
            this.setState({
                response: fullData.data[0],
                lon: fullData.data[0].lon,
                lat: fullData.data[0].lat,
                displayError1: false
            })
            this.getMoviesData(e.target.formGridCity.value)
        } catch (error) {
            this.setState({
                response: '',
                displayError1: true,
                errorMessage1: error.response.status + ':' + error.response.data.error
            })

        }
    }

    render() {
        return (
            <>
                <div id="mainContainer1">










                    <Card className={this.state.response ? "widewidth" : "thinwidth"}>
                        <Card.Header>
                            {this.state.response &&
                                <Button onClick={() => window.location.reload()} variant="primary">Clear Result!</Button>
                            }
                        </Card.Header>
                        {!this.state.response &&
                            <>
                                <Header />
                                <Explore handleSubmit={this.handleSubmit} />
                            </>
                        }
                        <Card.Body>
                            {this.state.response ?
                                <Card.Title>Welcome To {this.state.response.display_name.slice(0, this.state.response.display_name.indexOf(' ') - 1)}</Card.Title> : " "
                            }
                            <div id="cardsContainer" className={this.state.response ? "cardsContainerfull" : ""}>
                                {this.state.response ? (<><div id="mainContainer2"><Results datax={this.state.response} key={this.state.response.place_id} latitude={this.state.response.lat} longitude={this.state.response.lon} displayName={this.state.response.display_name} class={this.state.response.class} classIcon={this.state.response.icon} type={this.state.response.type} errorMessage1={this.state.errorMessage1} displayError1={this.state.displayError1} />
                                    <Movies errorMessage3={this.state.errorMessage3} displayError3={this.state.displayError3} weathercards={this.state.MoviesObj} /></div>
                                    <Weather errorMessage2={this.state.errorMessage2} displayError2={this.state.displayError2} weathercards={this.state.weatherObj} /></>)
                                    : this.state.displayError1 ? <div><p>{this.state.errorMessage1}</p></div> : (<div className="welcome-msg"><p>Welcome! Explore The World!</p></div>)}
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-muted"> Copywrite Bashar Alzrigar</Card.Footer>
                    </Card>
                </div>
            </>
        )
    }

}
