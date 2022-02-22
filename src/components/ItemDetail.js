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
            <div className="card col-4" style={{ width: "350px", margin: "10px", padding: "7px" }}>
                <h4 className="card-title">{item.title}</h4>
                <img src={item.image_url} alt={item.title}/>
                <p className="card-text">{item.description}</p>
                <p>Disponible: {item.stock}</p>
                <p>${item.price}</p>
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