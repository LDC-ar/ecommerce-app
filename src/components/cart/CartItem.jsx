const CartItem = ({data, delFromCart}) => {
    let {id, name, price, quantity} = data;
    
    return(
    <div style={{borderBottom: "thin solid gray"}}>
    <h4>{name}</h4>
    <h5>${price}.00 x {quantity}</h5>
    <button onClick={()=> delFromCart(id)}>Delete</button>
    <br />
    <button onClick={()=> delFromCart(id, true)}>Delete All</button>
    </div>
    );
};

export default CartItem;