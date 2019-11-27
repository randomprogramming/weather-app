import React, { Component } from "react";

import Thunderstorm from "../pics/thunder.png";
import Drizzle from "../pics/drizzle.png";
import Rain from "../pics/rain.png";
import Snow from "../pics/snow.png";
import Mist from "../pics/mist.png";
import Clear from "../pics/clear.png";
import Clouds from "../pics/clouds.png";

export default class HourlyDiv extends Component {
	render() {
		return (
			<div className="hourly-div">
				<img src={Clear}></img>
				{this.props.time}
			</div>
		);
	}
}
