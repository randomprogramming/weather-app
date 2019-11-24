import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./css/SearchForm.css";
import CityDiv from "./CityDiv";

export default class SearchForm extends Component {
	//TODO: Find a better way of storing allCities, this will probably get very laggy after adding loads of cities
	constructor() {
		super();
		this.state = {
			searchFieldValue: "",
			allCities: [
				{
					name: "Zagreb",
					country: "Croatia",
					countryCode: "HR",
				},
				{
					name: "Split",
					country: "Croatia",
					countryCode: "HR",
				},
				{
					name: "Paris",
					country: "France",
					countryCode: "FR",
				},
				{
					name: "Dubrovnik",
					country: "Croatia",
					countryCode: "HR",
				},
			],
			matchingCities: [],
		};
	}
	searchFieldOnUpdate = event => {
		//When the text field updates, this method is called
		//Since setState is async, we have to wait for it to finish storing the value into the state,
		//and after the value is stored in state, we call the searchCities method
		//ALSO IMPORTANT: don't put the () after searchCities or else it won't work
		this.setState({ searchFieldValue: event.target.value }, this.searchCities);
	};

	searchCities = () => {
		//TODO: Update the cities array in the state when button pressed, search for all cities that match
		//the one that is in the input text
		let temp = this.state.allCities.filter(
			city =>
				city.name.toLowerCase().includes(this.state.searchFieldValue.toLowerCase()) ||
				city.country.toLowerCase().includes(this.state.searchFieldValue.toLowerCase())
		);
		this.setState({
			matchingCities: this.state.searchFieldValue === "" ? [] : temp,
		});
	};
	//TODO: Create an actual component instead of using a div with a p tag below
	render() {
		return (
			<div className="search-form">
				<input
					className="search-field"
					onChange={this.searchFieldOnUpdate.bind(this)}
					type="text"
					placeholder="Search for your city..."
				></input>

				<span className="search-button" onClick={this.searchCities.bind(this)}>
					<FontAwesomeIcon icon={faSearch} color="white" size="2x" />
				</span>

				<div className="matching-cities">
					{this.state.matchingCities.map(city => (
						<CityDiv
							key={city.name}
							cityName={city.name}
							country={city.country}
							countryCode={city.countryCode}
						/>
					))}
				</div>
			</div>
		);
	}
}
