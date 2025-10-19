import React from 'react';
import classes from './CardButton.module.css'
import cartIcon from '../../../../assets/icons/icon-add-to-cart.svg'

const CardButton = ({className}) => {
    return (
        <button className={`${classes.button} ${className}`}>
            <img src={cartIcon} alt="" width={20} height={20}/>
            Add to Cart
        </button>
    );
};

export default CardButton;