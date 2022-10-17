import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import "./CartItem.css";
import { IoTrashBin } from "react-icons/io5";

const CartItem = ({ item }) => {
	const { removeItem, removeAllItems, addItem } = useContext(CartContext);
	return (
		<li className="CartItem">
			<img src={item.img} alt={item.title} className="CartItem-img" />
			<h5 className="CartItem-title">{item.title}</h5>
			<p className="CartItem-total">$ {item.price * item.quantity}</p>
			<div className="CartItem-quantity">
				<button onClick={() => addItem(item)}>+</button>
				<div className="CartItem-quantity__num">{item.quantity}</div>
				<button onClick={() => removeItem(item)}>-</button>
			</div>
			<button onClick={() => removeAllItems(item)} className="CartItem-RemoveAll">
				<IoTrashBin />
			</button>
		</li>
	);
};

export default CartItem;
