import React from "react";
import "./Cards.css";
import ButtonBuy from "./ButtonBuy";
import { textButton } from "../helpers/data";
import ButtonInfo from "./ButtonInfo";

function Cards({ src, title, condition, description, price, id, category }) {
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
				{/* El ID se lo tenes que pasar a los botones para los modales*/}
				<ButtonBuy id={id}>{textButton.textoDos}</ButtonBuy>
				<ButtonInfo id={id} category={category} />
			</div>
		</div>
	);
}

// const cards = () => {
//   return (
//     <div className='card'>
//         <figure>
//           <img src={celus.img} alt="150" width="150"/>
//           <h3></h3>
//         <button></button>
//         </figure>
//     </div>

//   )
// }

export default Cards;
