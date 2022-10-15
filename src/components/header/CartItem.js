import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
	const { removeItem, removeAllItems } = useContext(CartContext);
	return (
		<li>
			<img src={item.img} alt={item.title} style={{ height: "100px" }} />

			<div>{item.title}</div>
			<div style={{ fontSize: "30px", fontWeight: "bold" }}>{item.quantity}</div>
			<button onClick={() => removeItem(item.id)}>Remove</button>
			<button onClick={() => removeAllItems(item.id)}>Remove All</button>
		</li>
	);
};

export default CartItem;
