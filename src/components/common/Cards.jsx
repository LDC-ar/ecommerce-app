import React from "react";
import { textButton } from "../helpers/data";
import ButtonBuy from "./ButtonBuy";
import ButtonInfo from "./ButtonInfo";
import "./Cards.css";

function Cards({ src, title, condition, description, price, id, category, product }) {
	return (
		<div className="container-card">
			<div className="card-image">
				<img src={src} alt={title} />
			</div>
			<div className="card-description">
				<p className="card-new">{condition}</p>
				<p className="card-name">{title}</p>
				<p className="card-caract">{description}</p>
				<p className="card-price">${price}</p>
				<ButtonBuy product={product} id={id}>
					{textButton.textoDos}
				</ButtonBuy>
				<ButtonInfo id={id} category={category} />
			</div>
		</div>
	);
}

export default Cards;
