const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
            <>
            <p>id: {id} </p>
            <p>title: {title}</p>
            <p>stock: {stock}</p>
            <p>price: {price}</p>
            <p>pictureUrl: {pictureUrl}</p>
            </>
    );
}

export default Item;