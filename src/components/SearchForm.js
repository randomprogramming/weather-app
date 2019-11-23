import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchForm extends Component {
	render() {
		return (
			<div>
				<input type="text" placeholder="Search for your city..."></input>
				<span>
					<FontAwesomeIcon icon={faSearch} color="blue" />
				</span>
			</div>
		);
	}
}
