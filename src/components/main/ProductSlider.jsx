import React, { useState } from 'react';
import Cards from '../common/Cards';
import './SectionCard.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
		<div className="productCarrousel">
			<IoIosArrowBack
				className="left-arrow"
				onClick={prevCard}
			/>
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
			<IoIosArrowForward
				className="right-arrow"
				onClick={nextCard}
			/>
		</div>
	);
}

export default ProductSlider;
