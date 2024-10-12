import { createContext, useState } from "react";



export const CartContext = createContext({
    cartDropdownOpen: false,
    setCartDropdownOpen: () => null,
    cartItems: [],
    addItemToCart: () => null

});


export const CartProvider = ({ children }) => {
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(prevState => {
            const newCart = [...prevState];
            const productIndex = newCart.findIndex(cartItem => cartItem.id === productToAdd.id);

            if (productIndex > -1) {
                const newCartItem = {...newCart[productIndex]};
                newCartItem.quantity++;
                newCart[productIndex] = newCartItem;
                return newCart;
            }
            return [...newCart, {...productToAdd, quantity: 1}];

        })
    }

    const value = {
        cartDropdownOpen, setCartDropdownOpen,
        cartItems, addItemToCart
    }
    return (
        <CartContext.Provider value={value} >
            { children }
        </CartContext.Provider>
    );
}