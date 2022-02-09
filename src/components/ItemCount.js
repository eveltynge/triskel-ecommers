import { Button } from "bootstrap";
import {useState} from 'react';

const ItemCount = (props) => {
    const [contador, setContador] = useState(1);

    const aumento = () => {
        setContador(contador+1);
    }
    const disminuye = () => {
        setContador(contador-1);
    }
    return (
        <>
        <button onClick={aumento}>+</button>
        <p> {contador <= 5 ? contador : "5"} </p>
        <button onClick={disminuye}>-</button>
        <button onClick={contador}>Total</button>
        </>
    );
}

export default ItemCount;