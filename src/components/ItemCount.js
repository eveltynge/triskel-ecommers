//import { Button } from "bootstrap";
import { Button } from '@material-ui/core'
import { useEffect, useState } from 'react';

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        setContador(initial);
    }, [initial]);

    const aumento = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuye = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    };
    
    return (
        <>
        <Button onClick={aumento} >+</Button>
        <p>{contador}</p>
        <Button onClick={disminuye} >-</Button>
        {
            stock && contador
            ? <Button onClick={()=> onAdd(contador)} >Agregar al carrito</Button>
            : <Button disabled>Agregar al carrito</Button>
        }

        </>
    );
}

export default ItemCount;