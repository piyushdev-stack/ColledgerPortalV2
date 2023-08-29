import React from 'react';
import styles from "./Button.module.scss";

const Button = ({ className, onClick, disabled, text, children, variant, ...rest }) => {
    return (
        <button
            {...rest}
            className={`${styles.button} ${className || ""}`}
            onClick={onClick}
            disabled={disabled}
            data-variant={variant}
        >
            {children || text}
        </button>
    )
}

export default Button