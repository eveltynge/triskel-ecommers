import { useState } from 'react';
import Item from './Item';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [ItemCount, setItemCount] = useState(0);
    const onAdd = (qty) => {
        alert("Ha seleccionado " + qty + "items.")
        setItemCount(qty);
    }
    return (
    <>
        {
            //item && item.image_url
            true
            ?(
            <div>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.stock}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <p>{item.image_url}</p>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>)
            :
            <p>Cargando el item...</p>
        },
    </>)
}

export default ItemDetail;