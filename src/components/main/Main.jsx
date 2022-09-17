import React from "react";
import ButtonBuy from "./ButtonBuy";
import "./Main.css";

function Main(props) {
	return (
		<div className="container-main">
			{props.children}
			<h1>Main</h1>
			<ButtonBuy>{}</ButtonBuy>
		</div>
	);
}

export default Main;
