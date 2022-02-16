const Item = ({ id, title, stock, price }) => {
    return (
            <>
            <p>id: {id} </p>
            <p>title: {title}</p>
            <p>stock: {stock}</p>
            <p>price: {price}</p>
            </>
    );
}

export default Item;