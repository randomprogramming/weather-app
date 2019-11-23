import React, { Component } from "react";

export default class CityDiv extends Component {
	getRedirectUrl = () => {
		return "/" + this.props.countryCode + "/" + this.props.cityName;
	};
	render() {
		const { cityName, country, countryCode } = this.props;
		return (
			<div>
				<a href={this.getRedirectUrl()}>
					{cityName} {country} {countryCode}
				</a>
			</div>
		);
	}
}
