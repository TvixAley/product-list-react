import React from 'react';
import classes from './ConfirmedItem.module.css'

const ConfirmedItem = ({cartItem}) => {

    return (
        <div className={classes.item}>
            <div className={classes.item__description}>
                <img src={`./mock-server-data/${cartItem.image.thumbnail}`} alt="" width={48} height={48} className={classes.item__image}/>
                <div className={classes.item__text}>
                    <div className={classes.item__name}>{cartItem.name}</div>
                    <div className={classes.item__numbers}>
                        <span className={classes.quantity}>{`${cartItem.quantity}x`}</span>
                        <span className={classes.price}>{`@$${cartItem.price}`}</span>
                    </div>
                </div>
            </div>
            <span className={classes.item__price}>{`$${(cartItem.price * cartItem.quantity).toFixed(2)}`}</span>
        </div>
    );
};

export default ConfirmedItem;