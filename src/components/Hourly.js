import React, { Component } from "react";

export default class Hourly extends Component {
	render() {
		let { cityName, country } = this.props;
		return (
			<div>
				<h1>Hourly weather here</h1>
				<h2>{cityName}</h2>
			</div>
		);
	}
}
