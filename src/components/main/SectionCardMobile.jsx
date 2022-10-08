import React from "react";
import { useState } from "react";
import Cards from "./Cards";
import "./SectionCard.css";
import { cardsInfoIpad, sectionTitle } from "../helpers/data";
import LeftArrow from "../images/left-arrow2.png";
import RightArrow from "../images/right-arrow2.png";


export default function SectionCardMobile(){
    
    const [card, setCard] = useState (0);

    const length = cardsInfoIpad.length;
    
    const nextCard = () => {
        console.log('avanza')
            setCard (card === length - 1 ? 0 : card + 1);
        };
    
    const prevCard = () => {
        console.log('retrocede')
            setCard (card === 0 ? length - 1 : card - 1);
        };
    
    return (
        <>
            <div className="container-SectionCard">
			<h3>{sectionTitle.title3}</h3>
				</div>
            {cardsInfoIpad.map((card, index) => {
                return (index === card && <Cards key={card.id} id={card.id} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />)
            })}
            <div className="buttons">
                <img src={LeftArrow} alt="arrow" className="left-arrow" onClick={prevCard} />
                <img src={RightArrow} alt="arrow" className="right-arrow" onClick={nextCard} />
            </div>
        </>
    )
}
