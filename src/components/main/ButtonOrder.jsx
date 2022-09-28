import React from "react";
import { textButton } from "../helpers/data";
import "./Buttons.css";

const ButtonOrder = () => {
	return <button className="btn btnBuy">{textButton.order}</button>;
};

export default ButtonOrder;
