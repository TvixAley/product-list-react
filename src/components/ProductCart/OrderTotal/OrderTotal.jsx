import React from 'react';
import classes from './OrderTotal.module.css'
import {useCart} from "../../../context/CartContext.jsx";
import treeIcon from '../../../assets/icons/icon-carbon-neutral.svg'
import CustomButton from "../../UI/CustomButton/CustomButton.jsx";
import {useModal} from "../../../context/ModalContext.jsx";

const OrderTotal = () => {

    const {totalPrice} = useCart()
    const {setModalActive} = useModal()

    return (
        <div className={classes.wrapper}>
            <div className={classes.total}>
                <span className={classes.total__text}>Order Total</span>
                <span className={classes.total__price}>{`$${Number(totalPrice).toFixed(2)}`}</span>
            </div>
            <div className={classes.carbonNeutral}>
                <img src={treeIcon} alt="" width={20} height={20}/>
                <span>This is a <b>carbon-neutral</b> delivery</span>
            </div>
            <CustomButton onClick={() => setModalActive(true)}>Confirm Order</CustomButton>
        </div>
    );
};

export default OrderTotal;