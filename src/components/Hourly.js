import React, { Component } from "react";

import "./css/Hourly.css";
import HourlyDiv from "./HourlyDiv";

export default class Hourly extends Component {
	render() {
		let times = ["6pm", "9pm", "12pm", "3am", "6am"];
		let { cityName, country } = this.props;
		return (
			<div className="hourly-container">
				{times.map(time => (
					<HourlyDiv time={time} />
				))}
			</div>
		);
	}
}
