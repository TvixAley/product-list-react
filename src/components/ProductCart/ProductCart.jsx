import React from 'react';
import classes from "./ProductCart.module.css";
import emptyCartImage from '../../assets/icons/illustration-empty-cart.svg'
import {useCart} from "../../context/CartContext.jsx";

const ProductCart = () => {

    const {cart} = useCart();

    return (
        <div className={classes.cart}>
            <h2 className={classes.title}>Your Cart (0)</h2>
            <div className={classes.emptyCartWrapper}>
                <img className={classes.emptyCartImage}
                     src={emptyCartImage}
                     alt="Choclate cake minimalistic illustration"
                     width={128}
                     height={128}
                />
                <div className={classes.emptyCartText}>Your added items will appear here</div>
            </div>

        </div>
    );
};

export default ProductCart;