import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../../../assets/icons/svgicons';
import logo from "../../../assets/logos/colored-logo.png";
import { SOCIAL_LINKS } from '../../../utils/constants';
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <Container>
                    <div className={styles.footer_up}>
                        <Link className={styles.logo} to="/">
                            <img src={logo} alt="colledger-portal-logo" />
                        </Link>
                        <ul>
                            <li>
                                <NavLink to="">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    White Paper
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    Features
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    Careers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    Help
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    Privacy Policy
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_copyright}>
                        <p>
                            © {new Date().getFullYear()} ColledgerProtocol. All rights reserved
                        </p>
                        <ul>
                            <li>
                                <a href={SOCIAL_LINKS.GITHUB}>
                                    <GithubIcon />
                                </a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINKS.TWITTER}>
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINKS.DISCORD}>
                                    <DiscordIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer