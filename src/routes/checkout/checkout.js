import './checkout.scss';
import { CartContext } from "../../contexts/cart-context";
import CheckoutItem from "../../components/checkout-item/checkout-item";

import {useContext, useEffect, useState} from "react";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        setCartTotal(cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0))
    }, [cartItems]);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />) }
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    );
}


export default Checkout;