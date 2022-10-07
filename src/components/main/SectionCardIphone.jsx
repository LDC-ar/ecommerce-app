import React from "react";
import "./SectionCard.css";
import { sectionTitle, productsInfo } from "../helpers/data";
import Cards from "./Cards";

const SectionCardIphone = ({ windowWidth, breakPoint }) => {
	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title1}</h3>
			{/* Asi chequeas la condicion y renderiza un componente u otro*/}
			{windowWidth < breakPoint ? (
				<Cards
					id={productsInfo[1].id}
					src={productsInfo[1].img}
					title={productsInfo[1].title}
					condition={productsInfo[1].condition}
					description={productsInfo[1].description}
					price={productsInfo[1].price}
				/>
			) : (
				<div className="cards">
					{productsInfo.map(card => {
						if (card.category === "Phone") {
							return <Cards key={card.id} id={card.id} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />;
						}
					})}
				</div>
			)}
		</div>
	);
};

export default SectionCardIphone;
