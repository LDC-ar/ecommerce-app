import React from "react";
import "./SectionCard.css";
import { sectionTitle, productsInfo } from "../helpers/data";
import Cards from "./Cards";

const SectionCardIpad = ({ windowWidth, breakPoint }) => {
	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title3}</h3>
			{/* Asi chequeas la condicion y renderiza un componente u otro*/}
			{windowWidth < breakPoint ? (
				<Cards
					id={productsInfo[9].id}
					src={productsInfo[9].img}
					title={productsInfo[9].title}
					condition={productsInfo[9].condition}
					description={productsInfo[9].description}
					price={productsInfo[9].price}
				/>
			) : (
				<div className="cards">
					{productsInfo.map(card => {
						if (card.category === "Ipad") {
							return <Cards key={card.id} id={card.id} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />;
						}
					})}
				</div>
			)}
		</div>
	);
};

export default SectionCardIpad;
