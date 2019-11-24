import React, { Component } from "react";

import "../App.css";
import SearchForm from "./SearchForm";
import Hourly from "./Hourly";
import Daily from "./Daily";
import CurrentTemperature from "./CurrentTemperature";

export default class WeatherInfo extends Component {
	constructor() {
		super();
		//TODO: Maybe add the weather info to the state aswell, make this a bit neater
		this.state = {
			cityName: "",
			country: "",
			countryCode: "",
			temperature: 0,
		};
	}

	componentDidMount() {
		//TODO: Fetch all weawther data of the city

		//Get the country code and city name from the url
		const countryCode = this.props.match.params.countryCode;
		const cityName = this.props.match.params.cityName;
		this.setState(
			{
				cityName,
				countryCode,
			},
			this.getCurrentTemperature
		);
		//when the state has been set, we call getCurrentTemperature
	}

	async getCurrentTemperature() {
		//Make a call to the OWM api and set the state temperature to the value that we got as a response
		//Since the returned value is in Kelvin, turn it into Celsius and then put it in the state
		await fetch(
			"http://api.openweathermap.org/data/2.5/weather?q=" +
				this.state.cityName +
				"," +
				this.state.countryCode +
				"&APPID=8e6683aa718a7f7300409b4eaf7a2bf7"
		)
			.then(resp => resp.json())
			.then(data => this.setState({ temperature: Math.round(data.main.temp - 273.15) }));
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
					<CurrentTemperature temperature={this.state.temperature}></CurrentTemperature>
				</div>
				<div className="flex-horizontal">
					<SearchForm></SearchForm>
					<Hourly cityName={this.state.cityName} country={this.state.countryCode}></Hourly>
					<Daily cityName={this.state.cityName} country={this.state.countryCode}></Daily>
				</div>
			</div>
		);
	}
}
