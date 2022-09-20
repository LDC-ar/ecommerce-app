import React from "react";
import "./DesktopHeroHome.css";
import ApplePersonaWatch from "../images/apple-persona-watch.png";
import AppleWatch from "../images/apple-watch.png";

const DesktopHeroHome = () => {
	return (
		<div className="container-DesktopHeroHome">
			<div className="col-left">
				<h1>The future of health is on your wrist.</h1>
				<img src={ApplePersonaWatch} alt="Apple Persona Watch" className="ApplePersonaWatch" />
			</div>
			<div className="col-right">
				<img src={AppleWatch} alt="Apple Watch" className="AppleWatch" />
				<p>Measure your blood oxygen level. Keep an eye on your heart. See your fitness metrics on the enhanced Always-On Retina display. Live a healthier, more active, connected life.</p>
			</div>
		</div>
	);
};

export default DesktopHeroHome
