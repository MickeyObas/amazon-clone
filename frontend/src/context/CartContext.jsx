import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState({});

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext); 

CartProvider.propTypes = {
    children: PropTypes.any
}