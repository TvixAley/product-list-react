import React from 'react';
import classes from './ProductCard.module.css'
import CardButton from "./CardButton/CardButton.jsx";
import testImage from '../../../assets/image-baklava-desktop.jpg'

const ProductCard = ({product}) => {
    return (
        <article className={classes.card}>
            <div className={classes.imageButtonWrapper}>
                <img src={testImage} alt="" className={classes.image}/>
                <CardButton className={classes.button}/>
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