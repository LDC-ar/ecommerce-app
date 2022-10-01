import React from "react";
import "./SectionCard.css";
import { sectionTitle, cardsInfoIpad } from "../helpers/data";
import Cards from "./Cards";

const SectionCardIpad = ({ windowWidth, breakPoint }) => {
	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title3}</h3>
			{/* Asi chequeas la condicion y renderiza un componente u otro*/}
			{windowWidth < breakPoint ? (
				<Cards src={cardsInfoIpad[0].img} title={cardsInfoIpad[0].title} condition={cardsInfoIpad[0].condition} description={cardsInfoIpad[0].description} price={cardsInfoIpad[0].price} />
			) : (
				<div className="cards">
					{cardsInfoIpad.map(card => {
						return <Cards key={card.id} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />;
					})}
				</div>
			)}
		</div>
	);
};

export default SectionCardIpad;
