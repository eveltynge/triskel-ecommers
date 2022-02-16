// El componente ItemCount recibe 3 props (stock,initial,onAdd). check
// El componente ItemCount debe estar dentro del componente ItemListContainer . check
// La función onAdd debe estar definida en el componente padre de ItemCount (guiño guiño ItemListContainer) check

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
        <Button onClick={aumento} >Sumar</Button>
        <Button onClick={disminuye} >Restar</Button>
        <Button onClick={()=> onAdd(contador)} >Agregar al carrito</Button>
        </>
    );
}

export default ItemCount;