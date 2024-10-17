import { CheckoutItemContainer, ImageContainer, Quantity, BaseSpan,
    Arrow, Value, RemoveButton } from './checkout-item-style';
import { CartContext } from "../../contexts/cart-context";

import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { removeProductFromCart, addItemToCart, decrementItemInCart  } = useContext( CartContext );

    const incrementItem = () => {
        addItemToCart(cartItem);
    }
    const decrementItem = () => {
        decrementItemInCart(cartItem);
    }
    const removeFromCart = () => {
        removeProductFromCart(cartItem);
    }
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={decrementItem}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={incrementItem}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={removeFromCart}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}


export default CheckoutItem;