import React, { Component } from "react";

export default class Daily extends Component {
	render() {
		let { cityName, country } = this.props;
		return (
			<div>
				<h1>Daily weather here</h1>
				<h2>{cityName}</h2>
			</div>
		);
	}
}
