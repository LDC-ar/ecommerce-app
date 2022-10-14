import { TYPES } from "../Types";

const { ADD_TO_CART, REMOVE_ALL_FROM_CART } = TYPES;

const CartReducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		}
		// case REMOVE_ONE_FROM_CART: {
		// 	let itemToDelete = state.cartItems.find(item => item.id === action.payload);

		// 	return itemToDelete.quantity > 1
		// 		? {
		// 				...state,
		// 				cart: state.cartItems.map(item => (item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item)),
		// 		  }
		// 		: { ...state, cart: state.cartItems.filter(item => item.id !== action.payload) };
		// }

		case REMOVE_ALL_FROM_CART: {
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== action.payload),
			};
		}
		// case CLEAR_CART:
		// 	return initialState;
		default:
			return state;
	}
};

export default CartReducer;
