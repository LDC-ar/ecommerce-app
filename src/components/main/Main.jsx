import React from "react";
import ButtonBuy from "./ButtonBuy";
import DesktopHeroHome from "./DesktopHeroHome";
import "./Main.css";

function Main(props) {
	return (
		<div className="container-main">
			<DesktopHeroHome />

			{props.children}
			<ButtonBuy>{}</ButtonBuy>
		</div>
	);
}

export default Main;
