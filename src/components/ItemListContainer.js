
// La función onAdd debe estar definida en el componente padre de ItemCount (guiño guiño ItemListContainer)

import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
const {products} = require('../utils/products')

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(error => console.log(error))
    }, [datos]);

    const onAdd = (cantidad) => {
        alert('Ud ha seleccionado ' + cantidad + 'items.');
        console.log('Se ha agregado un producto');
    }
    return (
        <>
            <ItemList Items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}
export default ItemListContainer;