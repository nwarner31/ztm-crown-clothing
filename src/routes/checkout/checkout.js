import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout-style';
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
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />) }
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
}


export default Checkout;