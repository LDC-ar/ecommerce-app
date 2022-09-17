import React from "react";
import ButtonBuy from "./ButtonBuy";
import DesktopHeroHome from "./DesktopHeroHome";
import DesktopHeroProductIphone from "./DesktopHeroProductIphone";
import "./Main.css";

function Main(props) {
	return (
		<div className="container-main">
			<DesktopHeroHome />
			<DesktopHeroProductIphone />

			{props.children}
			<ButtonBuy>{}</ButtonBuy>
		</div>
	);
}

export default Main;
