import React from 'react';
import styles from "./HeadingText.module.scss";

const HeadingText = ({ heading, className, text }) => {
    return (
        <div className={`${styles.heading_text} ${className || ""}`}>
            <h2>{heading}</h2>
            {
                text &&
                <p>{text}</p>
            }
        </div>
    )
}

export default HeadingText