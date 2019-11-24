import React, { Component } from "react";

import "../App.css";

export default class CurrentTemperature extends Component {
	render() {
		//Read the temperature from props and display it
		return <div className="city-temperature">{this.props.temperature}&deg;</div>;
	}
}
