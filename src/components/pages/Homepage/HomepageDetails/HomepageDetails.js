import React from 'react';
import { Container } from 'react-bootstrap';
import styles from "./HomepageDetails.module.scss";

const HomepageDetails = () => {
    return (
        <section className={styles.details}>
            <Container>
                <div className={styles.details_in}>
                    <div className={styles.details_box}>
                        <div>
                            <h3>Total Users</h3>
                            <p>Registered through our portal</p>
                        </div>
                        <h2>12,857,082</h2>
                    </div>
                    <div className={styles.details_box}>
                        <div>
                            <h3>Verifications</h3>
                            <p>Done by students through us</p>
                        </div>
                        <h2>10,857,082</h2>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomepageDetails