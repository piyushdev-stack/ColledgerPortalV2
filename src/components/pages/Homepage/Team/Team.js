import React from 'react';
import { Container } from 'react-bootstrap';
import HeadingText from '../../../common/HeadingText/HeadingText';
import styles from "./Team.module.scss";
import ProfileCard from './ProfileCard/ProfileCard';
import Slider from 'react-slick';
import teamImg1 from "../../../../assets/images/team-1.png";
import teamImg2 from "../../../../assets/images/team-2.png";


const Team = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <section className={styles.team}>
            <Container>
                <div className={styles.team_inner}>
                    <HeadingText
                        heading="Meet Our Team"
                        className={styles.heading}
                        text={
                            <>
                                Meet our blockchain wizards at Colledger,  <br />
                                turning educational credentials into secure digital gems!
                            </>
                        }
                    />
                    <Slider className={styles.slider} {...settings}>
                        <ProfileCard
                            fName="Joy"
                            profileImg={teamImg1}
                            lName={"Kapur"}
                            socialLinks={{
                                github: "",
                                twitter: "",
                                discord: "",
                            }}
                        />
                        <ProfileCard
                            fName="Mony"
                            profileImg={teamImg2}
                            lName={"Roy"}
                            socialLinks={{
                                github: "",
                                twitter: "",
                                discord: "",
                            }}
                        />
                        <ProfileCard
                            fName="Joy"
                            lName={"Kapur"}
                            profileImg={teamImg2}
                            socialLinks={{
                                github: "",
                                twitter: "",
                                discord: "",
                            }}
                        />
                        <ProfileCard
                            fName="Joy"
                            lName={"Kapur"}
                            profileImg={teamImg2}
                            socialLinks={{
                                github: "",
                                twitter: "",
                                discord: "",
                            }}
                        />
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Team