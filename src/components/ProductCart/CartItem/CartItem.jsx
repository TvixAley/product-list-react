import React from 'react';
import classes from './CartItem.module.css'
import RemoveFromCartButton from "./RemoveFromCartButton/RemoveFromCartButton.jsx";
import {useCart} from "../../../context/CartContext.jsx";

const CartItem = ({item}) => {

    const {removeFromCart} = useCart()

    return (
        <div className={classes.item}>
            <div className={classes.info}>
                <div className={classes.name}>{item.name}</div>
                <div className={classes.numbers}>
                    <span className={classes.quantity}>{`${item.quantity}x`}</span>
                    <span className={classes.price}>{`@$${(item.price).toFixed(2)}`}</span>
                    <span className={classes.total}>{`$${(item.price * item.quantity).toFixed(2)}`}</span>
                </div>
            </div>
            <RemoveFromCartButton onClick={() => removeFromCart(item)}/>
        </div>
    );
};

export default CartItem;