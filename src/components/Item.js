import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, description, image_url }) => {
    return (
            <>
            <p>id: {id} </p>
            <p>title: {title}</p>
            <p>stock: {stock}</p>
            <p>price: {price}</p>
            <p>description: {description}</p>
            <Link to={`/item/${id}`}>Detalle{/*<img src={image_url} alt={title} />*/}</Link>
            
            </>
    );
}

export default Item;