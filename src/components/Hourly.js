import React, { Component } from "react";

import "./css/Hourly.css";
import HourlyDiv from "./HourlyDiv";

export default class Hourly extends Component {
	render() {
		return (
			<div className="hourly-container">
				{this.props.temperatures.map(hourly => (
					<HourlyDiv time={hourly.dt_txt} weatherType={hourly.weather[0].main} />
				))}
			</div>
		);
	}
}
