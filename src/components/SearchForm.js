import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./css/SearchForm.css";

export default class SearchForm extends Component {
	//TODO: Add a small box under the search bar which will show all cities from search results
	constructor() {
		super();
		this.state = {
			searchFieldValue: "",
			matchingCities: [
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
			],
		};
	}
	searchFieldOnUpdate = event => {
		this.setState({
			searchFieldValue: event.target.value,
		});
	};
	searchCities = () => {
		//TODO: Update the cities array in the state when button pressed, search for all cities that match
		//the one that is in the input text
		console.log(this.state.searchFieldValue);
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

				<div className="matching-cities" id="temp">
					{this.state.matchingCities.map(city => (
						<p>{city.name}</p>
					))}
				</div>
			</div>
		);
	}
}
