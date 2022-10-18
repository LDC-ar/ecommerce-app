import { useReducer } from 'react';
import { TYPES } from '../actions/contadorActions';
import { contadorInitialState, contadorReducer } from '../reducers/contadorReducer';


const ContadorMejorado = () => {

const [state, dispatch] = useReducer(contadorReducer, contadorInitialState,);

    const sumar = () => dispatch({type:TYPES.INCREMENT});
    const sumar5 = () => dispatch({type:TYPES.INCREMENT_5, payload: 5});
    const restar = () => dispatch({type:TYPES.DECREMENT});
    const restar5 = () => dispatch({type:TYPES.DECREMENT_5, payload: 5});
    const reset = () => dispatch({type:TYPES.RESET});

    return (
    <div style={{ textAlign: "center"}}>
        <h2>Counter v2 w/ reducer</h2>
        <nav>
            <button onClick={restar5}>-5</button>
            <button onClick={restar}>-</button>
            <button onClick={reset}>Clear Cart</button>
            <button onClick={sumar}>+</button>
            <button onClick={sumar5}>+5</button>
        </nav>
        <h3>{state.contador}</h3>
    </div>
    );
};

export default ContadorMejorado;