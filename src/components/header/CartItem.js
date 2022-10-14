import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
	const { removeItem } = useContext(CartContext);
	return (
		<li>
			<img src={item.img} alt={item.title} style={{ height: "100px" }} />

			<div>{item.title}</div>
			<button onClick={() => removeItem(item.id)}>Remove</button>
		</li>
	);
};

export default CartItem;
