import React from "react";
import "./SectionCard.css";
import { sectionTitle, cardsInfoMac} from "../helpers/data";
import Cards from "./Cards";

const SectionCardMac = () => {
	return (
		<div id="home-mac" className="container-SectionCard">
			<h3>{sectionTitle.title2}</h3>
			<div className="cards">
					{cardsInfoMac.map((card)=>{
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

export default SectionCardMac;
