import { useState, createContext, useContext } from "react";

const StoreContext = createContext();
const CartContext = () => useContext(StoreContext);

export const StoreProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [inCart, setInCart] = useState(false)

    const addItem = (item, qty) => {
        const inCartList = products.find((i) => i.id === item.id)
        setInCart(true)
        if(inCartList){
            inCartList.qty += qty
            setProducts([...products])
        } else {
            setProducts([...products, {...item, qty}])
        }
    }

    const removeItem = (id) => {
        products.splice(
            products.findIndex((i) => i.id === id), 1
        )
        setProducts([...products])
        if(products.length === 0){
            setInCart(false)
        }
    }

    const totalPrice = () => {
        return products.reduce((add, article) => (add += article.price * article.qty), 0)
    }

    const deleteList = () => {
        setProducts([])
    }

    const cartWidgetCount = () => {
        return products.reduce((add, i) => (add += i.qty), 0)
    }
    
    return (
        <StoreContext.Provider value={{ products, addItem, removeItem, totalPrice, deleteList, cartWidgetCount }}>{children}
        </StoreContext.Provider>
    )
}


export default CartContext;
