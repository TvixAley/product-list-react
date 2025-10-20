import React from 'react';
import classes from './CardButton.module.css'
import cartIcon from '../../../../assets/icons/icon-add-to-cart.svg'
import MinusIcon from '../../../../assets/icons/icon-decrement-quantity.svg?react'
import PlusIcon from '../../../../assets/icons/icon-increment-quantity.svg?react'

const CardButton = ({addToCart, removeFromCart, className, productQuantity = 0}) => {
    return (
        <>
            {(productQuantity === 0) ?
                <button className={`${classes.button} ${className}`} onClick={addToCart}>
                    <img src={cartIcon} alt="" width={20} height={20}/>
                    Add to Cart
                </button>
                :
                <div className={`${classes.buttonActive} ${className}`}>
                    <button className={classes.miniButton} onClick={removeFromCart}>
                        <MinusIcon className={classes.miniIcon}/>
                    </button>
                    <span>{productQuantity}</span>
                    <button className={classes.miniButton} onClick={addToCart}>
                        <PlusIcon className={classes.miniIcon}/>
                    </button>
                </div>
            }
        </>
    );
};

export default CardButton;