import React, { Component } from "react";

import "../App.css";
import SearchForm from "./SearchForm";

export default class WeatherInfo extends Component {
	constructor() {
		super();
		//TODO: Maybe add the weather info to the state aswell, make this a bit neater
		this.state = {
			cityName: "",
			country: "",
		};
	}

	componentDidMount() {
		//TODO: Fetch all weawther data of the city

		//Get the country and city name from the url
		const country = this.props.match.params.country;
		const cityName = this.props.match.params.cityName;

		this.setState({
			cityName,
			country,
		});
	}

	render() {
		//First, create a  large div above everyhing with the name of the city, maybe add country name later,
		//Then create a grid with columns: 	grid #1-has a search function to change the city
		//																	grid #2-holds the hourly temperature for the selected city
		//																	grid #3-holds the daily weather for the selected city for the next few days
		return (
			<div>
				<div className="centered-horizontal">
					<p className="city-name">{this.state.cityName}</p>
					<p className="city-temperature">15</p>
				</div>

				<div className="flex-horizontal">
					<SearchForm className="flexcomp"></SearchForm>
					<div className="flexcomp">
						<h1>Hourly weather here</h1>
					</div>
					<div className="flexcomp">
						<h1>Daily weather here</h1>
					</div>
				</div>
			</div>
		);
	}
}
