import { CartDropdownContainer, EmptyMessage, CartItems } from  './cart-dropdown-style';
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
        <CartDropdownContainer>
            <CartItems >
            {
                cartItems.length ? (cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} />)):
                    (<EmptyMessage>Your cart is empty</EmptyMessage>)
            }
            </CartItems>
            <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}


export default CartDropdown;