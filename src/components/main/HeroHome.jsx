import React from "react";
import "./HeroHome.css";
import ApplePersonaWatch from "../images/apple-persona-watch.png";
import AppleWatch from "../images/apple-watch.png";

const DesktopHeroHome = () => {
	return (
		<div id='hero-home'className="container-hero-home">
			<div className="col-left-hero-home">
				<h1>The future of health is on your wrist.</h1>
				<img src={ApplePersonaWatch} alt="Apple Persona Watch" className="ApplePersonaWatch" />
			</div>
			<div className="col-right-hero-home">
				<img src={AppleWatch} alt="Apple Watch" className="AppleWatch" />
				<p>
					Measure your blood oxygen level.
					<br />
					Keep an eye on your heart.
					<br />
					See your fitness metrics on the enhanced Always-On Retina display.
					<br />
					Live a healthier, more active, connected life.
				</p>
			</div>
		</div>
	);
};

export default DesktopHeroHome;
