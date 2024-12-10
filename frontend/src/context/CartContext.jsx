import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, settCart] = useState(
        JSON.parse(localStorage.getItem('cart'))
    );

    return (
        <CartContext.Provider value={{cart, settCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext); 

CartProvider.propTypes = {
    children: PropTypes.any
} 