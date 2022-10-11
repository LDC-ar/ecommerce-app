import React, { useState, useEffect } from "react";
import { sectionTitle, productsInfo } from "../helpers/data";
import Cards from "./Cards";
import LeftArrow from "../images/left-arrow2.png";
import RightArrow from "../images/right-arrow2.png";
import "./SectionCard.css";

const SectionCardMac = ({ windowWidth, breakPoint }) => {
	// Estado que guarda el array de productos con la categoria "Phone"
	const [computerArray, setComputerArray] = useState([]);

	// Este efecto filtra y guarda todos los productos del array general de productos que pertenezcan a la categoria "Phone"
	useEffect(() => {
		setComputerArray(productsInfo.filter(product => product.category === "Computer"));
	}, []);

	// Estado para slider en version mobile
	const [current, setCurrent] = useState(0);
	const length = computerArray.length;

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
					{computerArray.map(
						(card, index) =>
							index === current && (
								<Cards key={card.id} id={card.id} category={card.category} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />
							)
					)}
					<div className="product-carrousel-arrows">
						<img src={LeftArrow} alt="Switch to left arrow" className="left-arrow" onClick={prevSlide} />
						<img src={RightArrow} alt="Switch to right arrow" className="right-arrow" onClick={nextSlide} />
					</div>
				</div>
			) : (
				<div className="cards">
					{computerArray.map(card => (
						<Cards key={card.id} id={card.id} category={card.category} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />
					))}
				</div>
			)}
		</div>
	);
};

export default SectionCardMac;
