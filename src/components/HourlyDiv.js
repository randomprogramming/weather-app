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
		for (let i = 0; i < this.state.pictures.length; i++) {
			if (this.state.pictures[i].name === weatherType) {
				return this.state.pictures[i].pic;
			}
		}
	}

	render() {
		return (
			<div className="hourly-div">
				{this.props.time}
				{/* <span>7&deg;</span> */}
				<img src={this.getImageFor(this.props.weatherType)} alt="weather type"></img>
			</div>
		);
	}
}
