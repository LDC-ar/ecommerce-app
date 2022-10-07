import React from "react";
import "./SectionCard.css";
import { sectionTitle, cardsInfoIphone, productsInfo } from "../helpers/data";
import Cards from "./Cards";

const SectionCardIphone = ({ windowWidth, breakPoint }) => {
	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title1}</h3>
			{/* Asi chequeas la condicion y renderiza un componente u otro*/}
			{windowWidth < breakPoint ? (
				<Cards
					id={cardsInfoIphone[0].id}
					src={cardsInfoIphone[0].img}
					title={cardsInfoIphone[0].title}
					condition={cardsInfoIphone[0].condition}
					description={cardsInfoIphone[0].description}
					price={cardsInfoIphone[0].price}
				/>
			) : (
				<div className="cards">
					{productsInfo.map(card => {
						if (card.category == "Phone") {
							return <Cards key={card.id} id={card.id} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />;
						}
					})}
				</div>
			)}
		</div>
	);
};

export default SectionCardIphone;
