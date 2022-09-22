import React from "react";
import "./SectionCard.css";
import { sectionTitle, cardsInfoIpad } from "../helpers/data";
import Cards from "./Cards";


const SectionCardIpad = () => {
	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title3}</h3>
			<div className="cards">
				{cardsInfoIpad.map((card)=>{
					return (
						<div key={card.id}>
							<Cards
							src={card.img}
							title={card.title}
							condition={card.condition}
							description={card.description}
							price={card.price}
							/>
						 </div>
					)})}			
			</div>
		</div>
	);
};

export default SectionCardIpad;
