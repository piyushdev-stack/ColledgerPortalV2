import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../../assets/logos/logo.png";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = ({ active, handleActive }) => {
    return (
        <>
            <div onClick={handleActive} className={`${styles.overlay} ${active ? styles.active : ""} d-xl-none`}></div>
            <ul className={`${styles.header_nav} ${active ? styles.active : ""}`}>
                <li>
                    <Link to="" className={`d-xl-none ${styles.logo}`}><img src={logo} alt="" /></Link>
                </li>
                <li>
                    <NavLink to="/">Product</NavLink>
                </li>
                <li className={styles.dropdown}>
                    <Dropdown>
                        <Dropdown.Toggle className={styles.dropdown_btn} id="dropdown-basic">
                            Services
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={styles.dropdown_menu}>
                            <ul>
                                <li>
                                    <a href="/">
                                        Services <br />
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        Documentation <br />
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        Services <br />
                                        <span>Services</span>
                                    </a>
                                </li>
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <NavLink to="/">Github</NavLink>
                </li>
                <li>
                    <NavLink to="/">Docs</NavLink>
                </li>
                <li>
                    <NavLink to="/">FAQ</NavLink>
                </li>
                <li>
                    <NavLink to="/">Careers </NavLink>
                </li>
            </ul>
        </>
    )
}

export default HeaderNavigation