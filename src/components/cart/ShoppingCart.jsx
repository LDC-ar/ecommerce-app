import { useReducer} from "react";

import CartItem from "./CartItem";

import {
    shoppingInitialState,
    shoppingReducer,
}    from "../reducers/shoppingReducer";
import ProductItem from "./Productitem";
import { TYPES } from "../actions/shoppingActions";





const ShoppingCart = () => {

    const [state, dispatch] = useReducer( shoppingReducer, shoppingInitialState);
    
    const {products, cart} = state;

    const addToCart = (id) => {
        dispatch({type:TYPES.ADD_TO_CART, payload:id});
    };

    const delFromCart = (id, all = false) => {
        console.log(id, all);
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})}
        else{
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }
    };

    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART});
    };

return (
    <div>
    <h2>ShoppingCart</h2>
    <h3>Products</h3>
    <article className="box grid-responsive">
        {products.map((product) => (
        <ProductItem key={product.id} data={product} addToCart={addToCart} />
    ))}
    </article>
    <h3>Cart</h3>
    <article className='box'>
        <button onClick={clearCart}>Clear Cart</button>
        {
            cart.map((item, index)=> (
            <CartItem key={index} data={item} delFromCart={delFromCart}/>
        ))}
    </article>
    </div>
);
}

export default ShoppingCart; 