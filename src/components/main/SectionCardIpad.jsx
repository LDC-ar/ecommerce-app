import React, { useState, useEffect } from "react";
import { sectionTitle, productsInfo } from "../helpers/data";
import Cards from "./Cards";
import LeftArrow from "../images/left-arrow2.png";
import RightArrow from "../images/right-arrow2.png";
import "./SectionCard.css";

const SectionCardIpad = ({ windowWidth, breakPoint }) => {
	// Estado que guarda el array de productos con la categoria "Phone"
	const [ipadArray, setIpadArray] = useState([]);
	// Este efecto filtra y guarda todos los productos del array general de productos que pertenezcan a la categoria "Phone"
	useEffect(() => {
		setIpadArray(productsInfo.filter(product => product.category === "Ipad"));
	}, []);

	// Estado para slider en version mobile
	const [current, setCurrent] = useState(0);
	const length = ipadArray.length;

	// Funciones de botones para mover las slides.
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title3}</h3>
			{/* Asi chequeas la condicion y renderiza un componente u otro*/}
			{windowWidth < breakPoint ? (
				<div>
					{ipadArray.map(
						(card, index) =>
							index === current && (
								<Cards
									key={card.id}
									product={card}
									id={card.id}
									category={card.category}
									src={card.img}
									title={card.title}
									condition={card.condition}
									description={card.description}
									price={card.price}
								/>
							)
					)}
					<div className="product-carrousel-arrows">
						<img src={LeftArrow} alt="Switch to left arrow" className="left-arrow" onClick={prevSlide} />
						<img src={RightArrow} alt="Switch to right arrow" className="right-arrow" onClick={nextSlide} />
					</div>
				</div>
			) : (
				<div className="cards">
					{ipadArray.map(card => (
						<Cards key={card.id} product={card} id={card.id} category={card.category} src={card.img} title={card.title} condition={card.condition} description={card.description} price={card.price} />
					))}
				</div>
			)}
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
