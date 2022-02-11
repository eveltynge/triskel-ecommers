import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.title} stock={item.stock} price={item.price} pictureUrl={item.pictureUrl} />)
        : <p>Cargando tus compras...</p>
        }
        </>
    );
}

export default ItemList;