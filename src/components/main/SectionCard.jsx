import React from "react";
import Cards from "./Cards";
import "./SectionCard.css";
import { cardsInfoIpad, sectionTitle } from "../helpers/data";


export default function SectionCard(){
    
    return (
      <>
      <div className="container-SectionCard">
			<h3>{sectionTitle.title3}</h3>
				</div>
            <div className="cards">
                {cardsInfoIpad.map(card => {
                    return <Cards key={card.id} id={card.id} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />;
                })}
			</div>
      </>
    )
}