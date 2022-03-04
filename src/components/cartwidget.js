import React, { useContext } from 'react';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cartWidgetCount} = useContext(CartContext);

    return (
        <>
            <Link to= {'/cart'}>
                <div>
                    {cartWidgetCount()} 
                </div>
            </Link>
        </>
    );
}

export default CartWidget;