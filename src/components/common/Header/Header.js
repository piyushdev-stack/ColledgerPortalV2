import React, { useEffect, useState } from 'react';
import styles from "./Header.module.scss";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logos/logo.png";
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import Button from '../Button/Button';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(false);

    const handleActive = () => {
        setActive(!active);
    }

    window.onscroll = () => {
        setScrolled(window.scrollY > 0);
    }
    useEffect(() => {
        setScrolled(window.scrollY > 0);
    }, [])
    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <Container>
                <div className={styles.header_inner}>
                    <Link className={styles.logo} to="/">
                        <img src={logo} alt="colledger-portal-logo" />
                    </Link>
                    <HeaderNavigation
                        active={active}
                        handleActive={handleActive}
                    />
                    <div className={styles.header_action}>
                        <Button>Transcript</Button>
                        <Button
                            variant="whitish"
                        >Launch App</Button>
                        <button
                            className={`d-xl-none ${styles.toggler} ${active ? styles.active : ""}`}
                            onClick={handleActive}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header