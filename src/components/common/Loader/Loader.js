import React from 'react';
import styles from "./Loader.module.scss";

const Loader = () => {
    const loading = false;
    return (
        loading ? <div className={styles.loader}></div> : null
    )
}

export default Loader