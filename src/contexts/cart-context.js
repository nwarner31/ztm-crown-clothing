import { createContext, useState } from "react";



export const CartContext = createContext({
    cartDropdownOpen: false,
    setCartDropdownOpen: () => null

});


export const CartProvider = ({ children }) => {
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false);

    const value = {
        cartDropdownOpen, setCartDropdownOpen
    }
    return (
        <CartContext.Provider value={value} >
            { children }
        </CartContext.Provider>
    );
}