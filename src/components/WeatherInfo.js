import React, { Component } from "react";

import "../App.css";

export default class WeatherInfo extends Component {
	constructor() {
		super();
		//TODO: Maybe add the weather info to the state aswell, make this a bit neater
		this.state = {
			cityName: "",
			countryName: ""
		};
	}

	componentDidMount() {
		//TODO: Fetch all weawther data of the city

		//Get the country and city name from the url
		const countryName = this.props.match.params.countryName;
		const cityName = this.props.match.params.cityName;
		this.setState({
			cityName,
			countryName
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
					<div>
						<h1>Search field here</h1>
					</div>
					<div>
						<h1>Hourly weather here</h1>
					</div>
					<div>
						<h1>Daily weather here</h1>
					</div>
				</div>
			</div>
		);
	}
}
