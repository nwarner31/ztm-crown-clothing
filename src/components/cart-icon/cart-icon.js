import './cart-icon.scss';
import { CartContext } from "../../contexts/cart-context";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

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
        <div className='cart-icon-container' onClick={toggleCartDropdown} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{totalItemQuantity}</span>
        </div>
    );
}

export default CartIcon;