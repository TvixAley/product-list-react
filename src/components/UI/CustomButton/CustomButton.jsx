import React from 'react';
import classes from './CustomButton.module.css'

const CustomButton = ({className, children, ...props}) => {
    return (
        <button className={`${className} ${classes.button}`} {...props}>
            {children}
        </button>
    );
};

export default CustomButton;