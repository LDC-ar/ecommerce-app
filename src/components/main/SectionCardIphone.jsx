import React, { useState, useEffect } from "react";
import { sectionTitle, productsInfo, cardsInfoIphone } from "../helpers/data";
import Cards from "./Cards";
import LeftArrow from "../images/left-arrow2.png";
import RightArrow from "../images/right-arrow2.png";
import "./SectionCard.css";

const SectionCardIphone = ({ windowWidth, breakPoint }) => {
	const [current, setCurrent] = useState(0);
	const length = cardsInfoIphone.length;

	// Funciones de botones para mover las slides.
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title1}</h3>
			{/* Asi chequeas la condicion y renderiza un componente u otro*/}
			{windowWidth < breakPoint ? (
				<div>
					{cardsInfoIphone.map((card, index) => {
						return (
							<div key={index}>
								{index === current && <Cards id={card.id} category={card.category} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />}
							</div>
						);
					})}
					<div className="product-carrousel-arrows">
						<img src={LeftArrow} alt="Switch to left arrow" className="left-arrow" onClick={prevSlide} />
						<img src={RightArrow} alt="Switch to right arrow" className="right-arrow" onClick={nextSlide} />
					</div>
				</div>
			) : (
				<div className="cards">
					{productsInfo.map(card => {
						if (card.category === "Phone") {
							return <Cards key={card.id} id={card.id} category={card.category} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />;
						}
					})}
				</div>
			)}
		</div>
	);
};

export default SectionCardIphone;
