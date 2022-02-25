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
        setInCart(inCart.filter((article) => article.id !== id))
    }

    const totalPrice = () => {
        return products.reduce((add, article) => (add += article.price * article.qty), 0)
    }

    const deleteList = () => {
        setProducts([])
    }
    
    return (
        <StoreContext.Provider value={{ products, addItem, removeItem, totalPrice, deleteList }}>{children}
        </StoreContext.Provider>
    )
}


export default CartContext;