import './cart-dropdown.scss';
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../contexts/cart-context";


import { useContext } from "react";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
            {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} />)}
        </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
}


export default CartDropdown;