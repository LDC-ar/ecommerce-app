import React from "react";
import "./SectionCard.css";
import { sectionTitle, cardsInfoIphone } from "../helpers/data";
import Cards from "./Cards";

const SectionCardIphone = () => {
	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title1}</h3>
			<div className="cards">
				{cardsInfoIphone.map(card => {
					return <Cards key={card.id} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />;
				})}
			</div>
		</div>
	);
};

export default SectionCardIphone;
