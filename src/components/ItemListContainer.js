import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import products from '../utils/products';
import { useParams } from 'react-router';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

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
        customFetch(2000, products.filter(item => {
          if (idCategory === undefined) return item;
          return item.category_id === parseInt(idCategory)
        }))
          .then(result => setDatos(result))
          .catch(err => console.log(err))
      }, [datos]);

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