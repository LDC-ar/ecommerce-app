import React from "react";
import "./SectionCard.css";

const sectionCard = props => {
	return (
		<section className="containerCards">
			{props.children}
			<div className="container-card"></div>
		</section>
	);
};

export default sectionCard;
