import React from 'react';
import classes from './CustomModal.module.css'

const CustomModal = ({isActive, children}) => {
    return (
        <dialog className={`${classes.modal} ${isActive ? classes.active : ''}`}>
            <div className={classes.modalContent}>
                {children}
            </div>
        </dialog>
    );
};

export default CustomModal;