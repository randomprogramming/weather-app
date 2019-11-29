import React, { Component } from "react";

export default class CityDiv extends Component {
	getRedirectUrl = () => {
		//window.location =  / " + {this.props.countryCode} + " / " + this.props.cityName;;
		window.location = "/" + this.props.countryCode + "/" + this.props.cityName;
	};
	render() {
		const { cityName, country, countryCode } = this.props;
		return (
			<div className="city-div" onClick={this.getRedirectUrl}>
				{/* When the user clicks on one of the CityDivs, get the url for the city 
        that they clicked and redirect them to that url.
        This will reload the state of WeatherInfo and all data will load as it should */}
				<span className="city-span">
					{cityName}, {country}, {countryCode}
				</span>
			</div>
		);
	}
}
