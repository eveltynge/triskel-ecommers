import Item from "./Item";

const ItemList = ({items}) => {
    console.log(items);
    return (
        <>
            {
                items.length > 0
                ? items.map(item => <Item key={item.id} title={item.title} stock={item.stock} price={item.price} />)
                : <p>Cargando tus compras...</p>
            }
        </>
    );
}

export default ItemList;