import { useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    
    const onAdd = (qty) => {
        alert("Ha seleccionado " + qty + "items.")
        setItemCount(qty);
    }
    return (
    <>
        {
            item && item.image_url
            ?
            (
                <div>
                <p>{item.title}</p>
                <p>{item.stock}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <img src={item.image_url} />
                {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    : <Link to='/cart' style={{textDecoration: "none", color: "blue"}}><Button>Finalizar compra</Button></Link>
                }
            </div>)
            :
            <p>Cargando el item...</p>
        },
    </>)
}
console.log('Holaaa');

export default ItemDetail;