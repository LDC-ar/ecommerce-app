import React from "react";
import "./SectionCard.css";
import { sectionTitle, productsInfo } from "../helpers/data";
import Cards from "./Cards";

const SectionCardMac = ({ windowWidth, breakPoint }) => {
	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title2}</h3>
			{/* Asi chequeas la condicion y renderiza un componente u otro*/}
			{windowWidth < breakPoint ? (
				<Cards
					id={productsInfo[5].id}
					src={productsInfo[5].img}
					title={productsInfo[5].title}
					condition={productsInfo[5].condition}
					description={productsInfo[5].description}
					price={productsInfo[5].price}
				/>
			) : (
				<div className="cards">
					{productsInfo.map(card => {
						if (card.category === "Computer") {
							return <Cards key={card.id} id={card.id} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />;
						}
					})}
				</div>
			)}
		</div>
	);
};

export default SectionCardMac;
