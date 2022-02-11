//function ItemListCointainer(props) {
//    return <h3> {props.greeting} </h3>
//}
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
const {products} = require('../utils/products')

const ItemListCointainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(error => console.log(error))
    })
    return (
        <>
            <ItemList Items={datos} />
        </>
    )
}
export default ItemListCointainer;