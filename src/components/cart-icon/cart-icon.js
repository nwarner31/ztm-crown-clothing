import { CartContext } from "../../contexts/cart-context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon-style";

import {useContext, useEffect, useState} from "react";

const CartIcon = () => {
    const { setCartDropdownOpen, cartItems } = useContext(CartContext);
    const [totalItemQuantity, setTotalItemQuantity] = useState(0);
    useEffect(() => {
        setTotalItemQuantity(cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0));
    }, [cartItems]);

    const toggleCartDropdown = () => {
        setCartDropdownOpen(prevState => !prevState);
    }

    return (
        <CartIconContainer onClick={toggleCartDropdown} >
            <ShoppingIcon />
            <ItemCount>{totalItemQuantity}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;