import React from 'react';
import Cards from '../common/Cards';
import ProductSlider from './ProductSlider';
import './SectionCard.css';
import './ImageSlider.css';

export default function SectionCard({ productArray, title, windowWidth, breakPoint }) {
	return (
		<div className="container-SectionCard">
			<h3>{title}</h3>
			{windowWidth < breakPoint ? (
				<ProductSlider productArray={productArray} />
			) : (
				<div className="cards">
					{productArray.map(card => (
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
					))}
				</div>
			)}
		</div>
	);
}
