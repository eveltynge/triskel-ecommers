import ItemDetail from './ItemDetail';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import products from '../utils/products';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(itemId)))
            .then(result => setDato(result))
            .catch(error => console.log(error))
    },[itemId]);
    console.log(itemId)
    return (
        <ItemDetail item={dato} />
        
    );
}

export default ItemDetailContainer;