import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import WeatherInfo from "./components/WeatherInfo";
import "./App.css";

export default class App extends Component {
	render() {
		//We want the site to only work with localhost:3000/country/city, so we render the WeatherInfo Component
		//on that url, and then we grab the city name and country from the url in that component
		return (
			<Router>
				<Route path="/:countryName/:cityName" component={WeatherInfo} />
			</Router>
		);
	}
}
