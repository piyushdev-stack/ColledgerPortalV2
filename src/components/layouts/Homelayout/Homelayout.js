import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import styles from "./Homelayout.module.scss";

const Homelayout = () => {
    return (
        <main className={styles.home_layout}>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Homelayout