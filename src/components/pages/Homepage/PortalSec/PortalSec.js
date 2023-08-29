import React from 'react';
import styles from "./PortalSec.module.scss";
import { Container } from 'react-bootstrap';
import Button from '../../../common/Button/Button';

const PortalSec = () => {
    return (
        <section className={styles.portal_sec}>
            <Container>
                <div className={styles.portal_inner}>
                    <h2><span>One</span> Portal For
                        All Academies</h2>
                    <Button variant="pill large">Get Started</Button>
                </div>
            </Container>
        </section>
    )
}

export default PortalSec