import './cart-icon.scss';
import { CartContext } from "../../contexts/cart-context";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { useContext } from "react";

const CartIcon = () => {
    const { setCartDropdownOpen } = useContext(CartContext);

    const toggleCartDropdown = () => {
        setCartDropdownOpen(prevState => !prevState);
    }

    return (
        <div className='cart-icon-container' onClick={toggleCartDropdown} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;