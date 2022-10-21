import React from 'react';
import { textButton } from '../helpers/data';
import ButtonBuy from './ButtonBuy';
import ButtonInfo from './ButtonInfo';
import './Cards.css';
import { motion } from 'framer-motion';

function Cards({ src, title, condition, description, price, id, category, product }) {
	return (
		<motion.div
			className="container-card"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<div className="card-image">
				<img
					src={src}
					alt={title}
				/>
			</div>
			<div className="card-description">
				<p className="card-new">{condition}</p>
				<p className="card-name">{title}</p>
				<p className="card-caract">{description}</p>
				<p className="card-price">${price}</p>
				<ButtonBuy
					product={product}
					id={id}
				>
					{textButton.textoDos}
				</ButtonBuy>
				<ButtonInfo
					id={id}
					category={category}
				/>
			</div>
		</motion.div>
	);
}

export default Cards;
