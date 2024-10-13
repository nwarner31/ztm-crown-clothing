import './cart-dropdown.scss';
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../contexts/cart-context";


import { useContext } from "react";
import{ useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
            {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} />)}
        </div>
            <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
        </div>
    );
}


export default CartDropdown;