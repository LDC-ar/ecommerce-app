import React from "react";
import { textButton } from "../helpers/data";
import "./Buttons.css";

const ButtonBuy = () => {
	return <button className="btn btnCH btnBuy">{textButton.buy}</button>;
};

export default ButtonBuy;
