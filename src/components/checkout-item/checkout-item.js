import './checkout-item.scss';
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
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decrementItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={incrementItem}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={removeFromCart}>&#10005;</div>
        </div>
    );
}


export default CheckoutItem;