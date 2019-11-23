import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./css/SearchForm.css";

export default class SearchForm extends Component {
	updateCity = () => {
		console.log("Works!");
	};

	render() {
		return (
			<div>
				<input className="search-field" type="text" placeholder="Search for your city..."></input>
				<span className="search-button" onClick={this.updateCity.bind(this)}>
					<FontAwesomeIcon icon={faSearch} color="white" size="2x" />
				</span>
			</div>
		);
	}
}
