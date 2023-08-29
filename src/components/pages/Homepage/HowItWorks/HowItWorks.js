import React from 'react';
import styles from "./HowItWorks.module.scss";
import { Col, Container, Row } from 'react-bootstrap';
import HeadingText from '../../../common/HeadingText/HeadingText';
import icon1 from "../../../../assets/icons/how-it-works/verified.svg";
import icon2 from "../../../../assets/icons/how-it-works/wallet.svg";
import icon3 from "../../../../assets/icons/how-it-works/lock.svg";
import icon4 from "../../../../assets/icons/how-it-works/profile-accepted.svg";
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <section className={styles.work}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <HeadingText
                            className={styles.heading}
                            heading="How It Works ?"
                            text={<>
                                Lorem ipsum dolor sit amet consectetur. Ullamcorper commodo in aliquam cras habitasse orci leo mi laoreet. Nulla in magna velit pretium netus
                                {" "}<Link to="/">Learn More...</Link>
                            </>}
                        />
                    </Col>
                    <Col lg={6}>
                        <div className={styles.work_content}>
                            <div className={styles.work_box}>
                                <div className={styles.work_box_in}>
                                    <img src={icon1} alt="" />
                                    <p>Institute registration</p>
                                </div>
                            </div>
                            <div className={styles.work_box}>
                                <div className={styles.work_box_in}>
                                    <img src={icon2} alt="" />
                                    <p>Transcript wallet creation</p>
                                </div>
                            </div>
                            <div className={styles.work_box}>
                                <div className={styles.work_box_in}>
                                    <img src={icon3} alt="" />
                                    <p>Credential issuance</p>
                                </div>
                            </div>
                            <div className={styles.work_box}>
                                <div className={styles.work_box_in}>
                                    <img src={icon4} alt="" />
                                    <p>On-chain verifiaction</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HowItWorks