import React, { useState } from 'react';
import Cards from '../common/Cards';
import LeftArrow from '../images/left-arrow2.png';
import RightArrow from '../images/right-arrow2.png';
import './SectionCard.css';

function ProductSlider({ productArray }) {
	const [currentCard, setCurrentCard] = useState(0);

	const length = productArray.length;

	const nextCard = () => {
		setCurrentCard(currentCard === length - 1 ? 0 : currentCard + 1);
	};

	const prevCard = () => {
		setCurrentCard(currentCard === 0 ? length - 1 : currentCard - 1);
	};

	return (
		<div>
			{productArray.map((card, index) => {
				return (
					index === currentCard && (
						<Cards
							key={card.id}
							product={card}
							category={card.category}
							id={card.id}
							src={card.img}
							title={card.title}
							condition={card.condition}
							description={card.description}
							price={card.price}
						/>
					)
				);
			})}
			<div className="product-carrousel-arrows">
				<img
					src={LeftArrow}
					alt="arrow"
					className="left-arrow"
					onClick={prevCard}
				/>
				<img
					src={RightArrow}
					alt="arrow"
					className="right-arrow"
					onClick={nextCard}
				/>
			</div>
		</div>
	);
}

export default ProductSlider;
