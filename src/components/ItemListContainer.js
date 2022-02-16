
// La función onAdd debe estar definida en el componente padre de ItemCount (guiño guiño ItemListContainer)

import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import products from '../utils/products';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    console.log(products);
    const customFetch = (time, data) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (true) {
              resolve(data);
            } else {
              reject("Producto no encontrado");
            }
          }, time);
        });
      };
      useEffect(() => {
        customFetch(2000, products)
          .then((result) => setDatos(result))
          .catch((err) => console.log(err));
      }, []);
   /*  const getProducts = () => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(error => console.log(error))

    }
    useEffect(() => {
        getProducts()
    }, []);*/
    console.log(datos); 

    const onAdd = (cantidad) => {
        alert('Ud ha seleccionado ' + cantidad + 'items.');
        console.log('Se ha agregado un producto');
    }
    return (
        <>
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}
export default ItemListContainer;