import { TYPES } from "../cartTypes";

const { ADD_TO_CART, REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART, CLEAR_CART } = TYPES;

const CartReducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			let newItem = state.products.find(product => product.id === action.payload.id);

			let itemInCart = state.cartItems.find(item => item.id === newItem.id);

			return itemInCart
				? {
						...state,
						cartItems: state.cartItems.map(item => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)),
				  }
				: { ...state, cartItems: [...state.cartItems, { ...newItem, quantity: 1 }] };
		}

		case REMOVE_ONE_FROM_CART: {
			let itemToDelete = state.cartItems.find(item => item.id === action.payload);

			return itemToDelete.quantity > 1
				? {
						...state,
						cartItems: state.cartItems.map(item => (item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item)),
				  }
				: { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
		}

		case REMOVE_ALL_FROM_CART: {
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== action.payload),
			};
		}

		case CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};

		default:
			return state;
	}
};

export default CartReducer;
