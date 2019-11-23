import React, { Component } from "react";

export default class CityDiv extends Component {
	render() {
		return (
			<div>
				<span>
					{this.props.cityName} {this.props.country} {this.props.countryCode}
				</span>
			</div>
		);
	}
}
