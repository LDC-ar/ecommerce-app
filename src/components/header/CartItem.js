import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
	const { removeItem, removeAllItems } = useContext(CartContext);
	return (
		<li className="CartItem">
			<img src={item.img} alt={item.title} className="CartItem-img" />

			<h5 className="CartItem-title">{item.title}</h5>
			<div style={{ fontSize: "30px", fontWeight: "bold" }}>{item.quantity}</div>
			<button onClick={() => removeItem(item.id)}>Remove 1</button>
			<button onClick={() => removeAllItems(item.id)}>Remove All</button>
		</li>
	);
};

export default CartItem;
