import React from 'react';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../../../../../assets/icons/svgicons';
import styles from "./ProfileCard.module.scss";

const ProfileCard = ({ profileImg, fName, socialLinks, lName }) => {
    return (
        <div className={styles.profile_card}>
            <img src={profileImg} alt="" />
            <div className={styles.profile_card_content}>
                <h3>{fName} <span>{lName}</span></h3>
                <p>Chief Sales Executive</p>
                <ul>
                    <li>
                        <a href={socialLinks.github}>
                            <GithubIcon />
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks.twitter}>
                            <TwitterIcon />
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks.discord}>
                            <DiscordIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileCard