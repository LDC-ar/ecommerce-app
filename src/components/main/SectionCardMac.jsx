import React from "react";
import "./SectionCard.css";
import { sectionTitle, cardsInfoMac, productsInfo } from "../helpers/data";
import Cards from "./Cards";

const SectionCardMac = ({ windowWidth, breakPoint }) => {
	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title2}</h3>
			{/* Asi chequeas la condicion y renderiza un componente u otro*/}
			{windowWidth < breakPoint ? (
				<Cards
					id={cardsInfoMac[0].id}
					src={cardsInfoMac[0].img}
					title={cardsInfoMac[0].title}
					condition={cardsInfoMac[0].condition}
					description={cardsInfoMac[0].description}
					price={cardsInfoMac[0].price}
				/>
			) : (
				<div className="cards">
					{productsInfo.map(card => {
						if (card.category == "Computer") {
							return <Cards key={card.id} id={card.id} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />;
						}
					})}
				</div>
			)}
		</div>
	);
};

export default SectionCardMac;
