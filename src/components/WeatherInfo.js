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
			hourlyWeather: [],
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
			.then(data =>
				this.setState(
					{
						temperature: Math.round(data.main.temp - 273.15),
					},
					this.getHourlyWeather
				)
			);
	}

	async getHourlyWeather() {
		//Get the hourly weather status from the OWM API and store it in the state
		await fetch(
			"https://api.openweathermap.org/data/2.5/forecast?q=" +
				this.state.cityName +
				"," +
				this.state.countryCode +
				"&appid=8e6683aa718a7f7300409b4eaf7a2bf7"
		)
			.then(resp => resp.json())
			.then(data => {
				this.setState({ hourlyWeather: data.list });
			});

		this.cutHourlyWeather();
	}

	cutHourlyWeather() {
		//The OWM API gives us the hourly weather for the next couple of days, so we want to cut most of them
		//We want to reduce the amount of arrays to 6, maybe change this later
		const maxContainers = 6;

		let temp = [];
		for (let i = 0; i < maxContainers; i++) {
			this.editHourlyWeatherDT(this.state.hourlyWeather[i]);
			temp.push(this.state.hourlyWeather[i]);
		}
		this.setState({
			hourlyWeather: temp,
		});
	}

	editHourlyWeatherDT(hourlyState) {
		//The API gives us a dt_txt attribute, which holds the date and time of that hourly weather
		//We only need the time, so we cut the date and set the new dt_txt to only the time in hours(24h format)
		let temp = hourlyState.dt_txt.split(" ");
		temp = temp[1].split(":");
		hourlyState.dt_txt = temp[0];
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
					<Hourly temperatures={this.state.hourlyWeather}></Hourly>
					<Daily></Daily>
				</div>
			</div>
		);
	}
}
