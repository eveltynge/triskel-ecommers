//import { useContext, useEffect } from 'react';
import CartContext from './CartContext';
//import Item from './Item';

const Cart = () => {
    const { products, removeItem, totalPrice, deleteList } = CartContext()

    return (
        <>
            <div>
                <h1>Carrito de compras</h1>
                <h2>{products.length} Productos</h2>
            </div>
            {products.length > 0 &&
            products.map((item) => (
                <>
                    <div className='product/image'>
                        <img src={item.image_url} alt={item.title} />
                    </div>
                    <div className='product-remove'>
                        <span>{item.title}</span>
                        <button onClick={() => removeItem(item.id)}>Remover</button>
                    </div>
                    <div className='product-price'>
                        <span>{item.price}</span>
                    </div>
                    <div className='product-qty'>
                        <span>{item.qty}</span>
                    </div>
                </>
                )
            )}
            <div className='total'>
                <span>Total Compra</span>
                <div>{totalPrice}</div>
            </div>
            <div className='delete-list'>
                <span>Eliminar lista de compra</span>
                <div>{deleteList}</div>
            </div>
        </>
    )
    /* return (
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
    ); */
}

export default Cart;