import React from 'react';
import classes from "./ProductCart.module.css";
import emptyCartImage from '../../assets/icons/illustration-empty-cart.svg'
import {useCart} from "../../context/CartContext.jsx";
import CartItem from "./CartItem/CartItem.jsx";
import OrderTotal from "./OrderTotal/OrderTotal.jsx";

const ProductCart = () => {

    const {cart, totalQuantity} = useCart();

    return (
        <div className={classes.cart}>
            <h2 className={classes.title}>Your Cart ({totalQuantity})</h2>
            {cart.length === 0
                ?
                <div className={classes.emptyCartWrapper}>
                    <img className={classes.emptyCartImage}
                         src={emptyCartImage}
                         alt="Choclate cake minimalistic illustration"
                         width={128}
                         height={128}
                    />
                    <div className={classes.emptyCartText}>Your added items will appear here</div>
                </div>
                :
                <div className={classes.cartItems}>
                    <ul className={classes.cartItems__list}>
                        {cart.map(item => (
                            <li key={item.id}>
                                <CartItem item={item}/>
                            </li>
                        ))}
                    </ul>
                    <OrderTotal/>
                </div>
            }


        </div>
    );
};

export default ProductCart;