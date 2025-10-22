import React from 'react';
import classes from './CustomModal.module.css'

const CustomModal = ({isActive, onClose, children}) => {
    return (
        <dialog className={`${classes.modal} ${isActive ? classes.active : ''}`} onClick={onClose}>
            <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </dialog>
    );
};

export default CustomModal;