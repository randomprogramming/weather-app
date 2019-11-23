import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./css/SearchForm.css";

export default class SearchForm extends Component {
	//TODO: Add a small box under the search bar which will show all cities from search results
	constructor() {
		super();
		this.state = {
			searchFieldValue: ""
		};
	}
	searchFieldOnUpdate = event => {
		this.setState({
			searchFieldValue: event.target.value
		});
	};
	searchCities = () => {
		console.log(this.state.searchFieldValue);
	};

	render() {
		return (
			<div>
				<input
					className="search-field"
					onChange={this.searchFieldOnUpdate.bind(this)}
					type="text"
					placeholder="Search for your city..."
				></input>
				<span className="search-button" onClick={this.searchCities.bind(this)}>
					<FontAwesomeIcon icon={faSearch} color="white" size="2x" />
				</span>
			</div>
		);
	}
}
