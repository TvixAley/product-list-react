import React from 'react';
import classes from './OrderConfirmation.module.css'
import confirmIcon from '../../assets/icons/icon-order-confirmed.svg'
import CustomButton from "../UI/CustomButton/CustomButton.jsx";
import {useCart} from "../../context/CartContext.jsx";
import ConfirmedItem from "./ConfirmedItem/ConfirmedItem.jsx";
import {useModal} from "../../context/ModalContext.jsx";


const OrderConfirmation = () => {

    const {cart, totalPrice} = useCart()
    const {setModalActive} = useModal()

    return (
        <div className={classes.confirmationBlock}>
            <div className={classes.title__wrapper}>
                <img src={confirmIcon} alt="" width={48} height={48}/>
                <div className={classes.title__text}>
                    <h2 className={classes.title__title}>Order Confirmed</h2>
                    <p className={classes.title__comment}>We hope you enjoy your food!</p>
                </div>
            </div>
            <div className={classes.confirmedItems__wrapper}>
                <ul className={classes.confirmedItems__list}>
                    {cart.map((cartItem) => (
                        <li key={cartItem.id} className={classes.confirmedItems__item}>
                            <ConfirmedItem cartItem={cartItem}/>
                        </li>
                    ))}
                </ul>
                <div className={classes.total}>
                    <span className={classes.total__text}>Order Total</span>
                    <span className={classes.total__price}>{`$${Number(totalPrice).toFixed(2)}`}</span>
                </div>
            </div>
            <CustomButton onClick={() => setModalActive(false)}>Start New Order</CustomButton>
        </div>
    );
};

export default OrderConfirmation;