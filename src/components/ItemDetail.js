import { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
    const [ItemCount, setItemCount] = useState(0);
    const onAdd = (qty) => {
        alert("Ha seleccionado " + qty + "items.")
        setItemCount(qty);
    }
    return 
    <>
        <Title>{item.title}</Title>
        <Image>{item.image}</Image>
        <Description>{item.description}</Description>
        <Price>{item.price}</Price>
    </>;
}