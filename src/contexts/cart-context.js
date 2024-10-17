import { createContext, useState } from "react";



export const CartContext = createContext({
    cartDropdownOpen: false,
    setCartDropdownOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    decrementItemInCart: () => null,
    removeProductFromCart: () => null
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

    const decrementItemInCart = (productToDecrement) => {
        setCartItems(prevState => {
            const newCart = [...prevState];
            const productIndex = newCart.findIndex(cartItem => cartItem.id === productToDecrement.id);
            if (newCart[productIndex].quantity > 1) {
                const newCartItem = {...newCart[productIndex]};
                newCartItem.quantity--;
                newCart[productIndex] = newCartItem;
                return newCart;
            }
            return newCart.filter(cartItem => cartItem.id !== productToDecrement.id );


        })
    }

    const removeProductFromCart = (productToRemove) => {
        setCartItems(prevState => {
            const newCart = [...prevState];
            return newCart.filter(cartItem => cartItem.id !== productToRemove.id);
        });
    }

    const value = {
        cartDropdownOpen, setCartDropdownOpen,
        cartItems, addItemToCart, decrementItemInCart, removeProductFromCart
    }
    return (
        <CartContext.Provider value={value} >
            { children }
        </CartContext.Provider>
    );
}