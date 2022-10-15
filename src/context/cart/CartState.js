import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { TYPES } from "../cartTypes";
import { productsInfo } from "../../components/helpers/data";

const CartState = ({ children }) => {
	const { ADD_TO_CART, REMOVE_ONE_FROM_CART } = TYPES;

	const initialState = {
		products: [...productsInfo],
		cartItems: [],
	};

	const [state, dispatch] = useReducer(CartReducer, initialState);

	const addToCart = item => {
		dispatch({ type: ADD_TO_CART, payload: item });
	};

	const removeItem = item => {
		dispatch({ type: REMOVE_ONE_FROM_CART, payload: item });
	};

	// const removeAllItems = () => {
	// 	dispatch({ type: REMOVE_ALL_FROM_CART });
	// };

	// const clearCart = () => {
	// 	dispatch({ type: CLEAR_CART });
	// };

	return (
		<CartContext.Provider
			value={{
				cartItems: state.cartItems,
				addToCart,
				removeItem,
				// removeAllItems,
				// clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartState;
