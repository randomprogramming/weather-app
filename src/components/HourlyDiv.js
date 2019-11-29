import React, { Component } from "react";

import thunderstormPic from "../pics/thunder.png";
import drizzlePic from "../pics/drizzle.png";
import rainPic from "../pics/rain.png";
import snowPic from "../pics/snow.png";
import mistPic from "../pics/mist.png";
import clearPic from "../pics/clear.png";
import cloudsPic from "../pics/clouds.png";
import "./css/Hourly.css";

export default class HourlyDiv extends Component {
	constructor() {
		super();
		this.state = {
			pictures: [
				{
					pic: thunderstormPic,
					name: "Thunderstorm",
				},
				{
					pic: drizzlePic,
					name: "Drizzle",
				},
				{
					pic: rainPic,
					name: "Rain",
				},
				{
					pic: snowPic,
					name: "Snow",
				},
				{
					pic: mistPic,
					name: "Mist",
				},
				{
					pic: clearPic,
					name: "Clear",
				},
				{
					pic: cloudsPic,
					name: "Clouds",
				},
			],
		};
	}
	getImageFor(weatherType) {
		//find the image which matches the weatherType and return it
		for (let i = 0; i < this.state.pictures.length; i++) {
			if (this.state.pictures[i].name === weatherType) {
				return this.state.pictures[i].pic;
			}
		}
	}

	render() {
		return (
			<div className="hourly-div">
				<span className="weather-time">{this.props.time}h</span>
				<img
					className="weatherType-image"
					src={this.getImageFor(this.props.weatherType)}
					alt="weather type"
				></img>
				<span className="weather-temperature">7&deg;</span>
			</div>
		);
	}
}
