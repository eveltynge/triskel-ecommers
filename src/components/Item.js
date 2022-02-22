import { Link } from 'react-router-dom';

/* const Item = ({ id, title, stock, price, description, image_url }) => {
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
} */

const Item =({ id, title, stock, price, description, image_url }) => {
    return (
        <>
        <div className="card col-4" style={{ width: "350px", margin: "10px", padding: "7px" }}>
            <h4 className="card-title">{title}</h4>
            <Link to={`/item/${id}`}><img className="card-img-top" src={image_url} alt={title} style={{padding: "10px"}}/></Link>
            <p className="card-text">{description}</p>
            <p>${price}</p>
            <p>Disponible: {stock}</p>
        </div>
        </>
    );
}

export default Item;