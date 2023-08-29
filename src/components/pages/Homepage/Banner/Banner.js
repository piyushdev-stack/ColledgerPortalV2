import React from 'react';
import styles from "./Banner.module.scss";
import { Container } from 'react-bootstrap';
import Button from '../../../common/Button/Button';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../../../../assets/icons/svgicons';
import { SOCIAL_LINKS } from '../../../../utils/constants';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <Container>
                <div className={styles.banner_in}>
                    <h3>Achieve.</h3>
                    <h2>Authenticate.</h2>
                    <h1>Ascend.</h1>
                    <p>Unleashing Your Achievements on the Blockchain. Empower Your Future with Decentralized Credential Management!</p>
                    <Button variant="pill large" className={styles.button}>Get Started</Button>
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
        </section>
    )
}

export default Banner