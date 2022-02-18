import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, description, image_url }) => {
    return (
            <>
            <Link to={`/item/${id}`}><img src={image_url} alt={title} style={{padding: "10px"}}/></Link>            
            <p>id: {id} </p>
            <p>title: {title}</p>
            <p>stock: {stock}</p>
            <p>price: {price}</p>
            <p>description: {description}</p>
            
            </>
    );
}

export default Item;