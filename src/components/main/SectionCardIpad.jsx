import React from "react";
import "./SectionCard.css";
import { sectionTitle } from "../helpers/data";
import SectionCardMobile from "./SectionCardMobile";
import SectionCard from "./SectionCard";

const SectionCardIpad = ({ windowWidth, breakPoint }) => {
	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title3}</h3>
			{windowWidth < breakPoint ? <SectionCardMobile /> : <SectionCard />}
		</div>
	);
};

export default SectionCardIpad;



/*

{productsInfo.map((card, index) => {
	if (card.category == "Ipad") {
		return (
			index === card && 
			<>
			<Cards key={card.id} id={card.id} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />
			<div className="buttons">
				<img src={LeftArrow} alt="arrow" className="left-arrow" onClick={prevCard} />
				<img src={RightArrow} alt="arrow" className="right-arrow" onClick={nextCard} />
			</div>
			</>
			)
		}
	})}
	
	*/