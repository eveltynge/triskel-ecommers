import ItemDetail from './ItemDetail';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';

//hace la lectura de la data q esta en custome fetch y se lo psa por props al item detail

const { products } = require('../utils/products');

const getItem = () => {
    const [dato, setDato] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(itemId)))
            .then(result => setDato(result))
            .cathc(error => console.log(error))
    },[]);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;