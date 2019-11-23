import React, { Component } from "react";

export default class CityDiv extends Component {
	getRedirectUrl = () => {
		return "/" + this.props.countryCode + "/" + this.props.cityName;
	};
	render() {
		const { cityName, country, countryCode } = this.props;
		return (
			<div>
				{/* When the user clicks on one of the CityDivs, get the url for the city that they clicked and redirect them to that url
        This will reload the state of WeatherInfo and all data will load as it should //TODO: Make this pretty */}
				<a href={this.getRedirectUrl()}>
					{cityName} {country} {countryCode}
				</a>
			</div>
		);
	}
}
