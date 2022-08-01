import React, { Component } from 'react'
import axios from 'axios';
import Explore from './Explore'
import Results from './Results'
import Swal from 'sweetalert2'
import '../theme/Main.css'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: '',
            error: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let url;
        if (e.target.formGridState.value === "US" && e.target.formGridCity.value !== "") {
            url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${e.target.formGridCity.value}&format=json`
        } else if (e.target.formGridState.value === "EU" && e.target.formGridCity.value !== "") {
            url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${e.target.formGridCity.value}&format=json`
        } else if (e.target.formGridState.value === "") {
            return Swal.fire('You Must Select a Region')
        } else if (e.target.formGridCity.value === "") {
            return Swal.fire('You Must Enter Something To Search')
        }
        await axios.get(url)
            .then(fullData => {
                this.setState({ response: fullData.data })
            });

    }

    render() {
        return (
            <>
                <div id="mainContainer">
                    <Explore handleSubmit={this.handleSubmit} />
                    <div id = "cardsContainer" className= {this.state.response ? "cardsContainerfull" : ""}>
                        {this.state.response ? (this.state.response.map((item) => {
                            return (

                                <Results datax={this.state.response} key={item.place_id} latitude={item.lat} longitude={item.lon} displayName={item.display_name} class={item.class} classIcon={item.icon} type={item.type} />
                            )
                        })) : (<div><p>Welcome! Explore The World!</p></div>)}
                    </div>
                </div>
            </>
        )
    }
}
