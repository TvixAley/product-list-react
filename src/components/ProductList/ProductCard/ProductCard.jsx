import React from 'react';
import classes from './ProductCard.module.css'
import CardButton from "./CardButton/CardButton.jsx";
import {useCart} from "../../../context/CartContext.jsx";

const ProductCard = ({product}) => {

    const {addToCart, removeFromCart, getProductQuantity} = useCart()

    return (
        <article className={classes.card}>
            <div className={classes.imageButtonWrapper}>
                <picture>
                    <source srcSet={`./mock-server-data/${product.image.mobile}`} media='(max-width: 500px)'/>
                    <source srcSet={`./mock-server-data/${product.image.tablet}`} media='(max-width: 1024px)'/>
                    <img src={`./mock-server-data/${product.image.desktop}`}
                         alt=""
                         className={`${classes.image} ${getProductQuantity(product.id) ? classes.active : ''}`}
                    />
                </picture>
                <CardButton className={classes.button}
                            productQuantity={getProductQuantity(product.id)}
                            addToCart={() => addToCart(product)}
                            removeFromCart={() => removeFromCart(product)}
                />
            </div>

            <div className={classes.info}>
                <div className={classes.category}>{product.category}</div>
                <div className={classes.name}>{product.name}</div>
                <div className={classes.price}>{`$${Number(product.price).toFixed(2)}`}</div>
            </div>
        </article>
    );
};

export default ProductCard;