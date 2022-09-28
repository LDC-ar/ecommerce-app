import React from "react";
import { textButton } from "../helpers/data";
import "./Buttons.css";

const ButtonInfo = () => {
	return <button className="btn btnInfo btnCH">{textButton.learnMore}</button>;
};

export default ButtonInfo;
