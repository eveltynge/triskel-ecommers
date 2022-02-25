import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import Item from './Item';

const Cart = () => {
    const { products, addItem, removeItem, totalPrice, deleteList } = CartContext()

    return (
        <>
            <h1>Carrito de compras</h1>
            <div>
                {products.map((item) => (
                    <>
                    <div>
                        <img src={item.image_url} />
                    </div><div>
                            <p>{item.title}</p>
                    </div>
                    </>
                ))}
            </div>
        </>
    );
}

export default Cart;