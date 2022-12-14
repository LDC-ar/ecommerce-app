import { useReducer, useEffect } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { TYPES } from '../cartTypes';
import { productsInfo } from '../../components/helpers/data';

const CartState = ({ children }) => {
	const { ADD_TO_CART, ADD_ONE_FROM_CART, REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART, CLEAR_CART } = TYPES;

	// Guarda el array que este guardado en localStorage
	let jsonCart = JSON.parse(localStorage.getItem('carritoGuardado')) || [];

	let initialState = {
		products: [...productsInfo],
		cartItems: jsonCart,
	};

	const [state, dispatch] = useReducer(CartReducer, initialState);

	// Guarda el array de cartItems en localStorage
	useEffect(() => {
		localStorage.setItem('carritoGuardado', JSON.stringify(state.cartItems));
	}, [state]);

	const addToCart = item => {
		dispatch({ type: ADD_TO_CART, payload: item });
	};

	const addItem = item => {
		dispatch({ type: ADD_ONE_FROM_CART, payload: item });
	};

	const removeItem = item => {
		dispatch({ type: REMOVE_ONE_FROM_CART, payload: item });
	};

	const removeAllItems = item => {
		dispatch({ type: REMOVE_ALL_FROM_CART, payload: item });
	};

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	return (
		<CartContext.Provider
			value={{
				cartItems: state.cartItems,
				addToCart,
				addItem,
				removeItem,
				removeAllItems,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartState;
