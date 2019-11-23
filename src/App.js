import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import WeatherInfo from "./components/WeatherInfo";
import "./App.css";

export default class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/:countryName/:cityName" component={WeatherInfo} />
			</Router>
		);
	}
}
