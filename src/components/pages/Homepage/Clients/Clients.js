import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo1 from "../../../../assets/icons/clients/logo-1.png";
import logo2 from "../../../../assets/icons/clients/logo-2.png";
import logo3 from "../../../../assets/icons/clients/logo-3.png";
import logo4 from "../../../../assets/icons/clients/logo-4.png";
import logo5 from "../../../../assets/icons/clients/logo-5.png";
import logo6 from "../../../../assets/icons/clients/logo-6.png";
import logo7 from "../../../../assets/icons/clients/logo-7.png";
import logo8 from "../../../../assets/icons/clients/logo-8.png";
import logo9 from "../../../../assets/icons/clients/logo-9.png";
import HeadingText from '../../../common/HeadingText/HeadingText';
import styles from "./Clients.module.scss";

const Clients = () => {
    return (
        <section className={styles.clients}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className={styles.clients_box}>
                            <div className={styles.clients_box_outer}>
                                <img src={logo1} alt="" />
                                <img src={logo2} alt="" />
                                <img src={logo3} alt="" />
                                <img src={logo4} alt="" />
                                <img src={logo5} alt="" />
                                <img src={logo6} alt="" />
                            </div>
                            <div className={styles.clients_box_inner}>
                                <div className={styles.clients_box_inner_logos}>
                                    <img src={logo7} alt="" />
                                    <img src={logo8} alt="" />
                                    <img src={logo9} alt="" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <HeadingText
                            className={styles.heading}
                            heading="Clients We Work With"
                            text="We partner with leading universities to revolutionize their credential management, providing a secure and efficient platform for managing educational qualifications."
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Clients