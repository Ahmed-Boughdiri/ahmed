import styles from "../../styles/layout/aboutme/aboutme.module.css";
import Image from "next/image";
import { useState } from "react";

import linkedinIcon from "../../assets/icons/social/linkedin.png";
import twitterIcon from "../../assets/icons/social/twitter.png";
import mediumIcon from "../../assets/icons/social/medium.png";

export const AboutMe = () => {
    const [showTwitterLabel, setShowTwitterLabel] = useState(false);
    const [showMediumLabel, setShowMediumLabel] = useState(false);
    const [showLinkedinLabel, setShowLinkedinLabel] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.about_me_image} />
            <div className={styles.about_me_description}>
                <h1>Ahmed Boughdiri</h1>
                <p>
                    Hi, I'm Ahmed, a passionate full-stack developer with a programming journey that began at the age of 14. 
                    Specializing in web development, I thrive in the world of MERN (MongoDB, Express, React, NodeJS). 
                    However, my skills extend beyond those boundaries, 
                    encompassing PHP, Python, React Native, MySQL, WordPress, and more. 
                    As a freelancer, I've had the privilege of collaborating with remarkable businesses and startups, 
                    honing my expertise along the way. 
                    Now, I'm eagerly seeking new and exciting ventures in the ever-evolving IT world.
                </p>
                
                <div className={styles.abou_me_social_media}>
                    <div>
                        <Image 
                            src={linkedinIcon}
                            alt="linkedin icon"
                            height={23}
                            width={23}
                            onMouseEnter={() => setShowLinkedinLabel(true)}
                            onMouseLeave={() => setShowLinkedinLabel(false)}
                        />
                        {
                            showLinkedinLabel && (
                                <p className={styles.about_me_social_media_label}>
                                    https://www.linkedin.com/in/ahmed-boughdiri-8792551b7/
                                </p>
                            )
                        }
                    </div>
                    <div>
                        <Image 
                            src={twitterIcon}
                            alt="twitter icon"
                            height={25}
                            width={25}
                            onMouseEnter={() => setShowTwitterLabel(true)}
                            onMouseLeave={() => setShowTwitterLabel(false)}
                        />
                        {
                            showTwitterLabel && (
                                <p className={styles.about_me_social_media_label}>
                                    @ahmed_boughdiri
                                </p>
                            )
                        }
                    </div>
                    <div>
                        <Image 
                            src={mediumIcon}
                            alt="medium icon"
                            height={24}
                            width={24}
                            onMouseEnter={() => setShowMediumLabel(true)}
                            onMouseLeave={() => setShowMediumLabel(false)}
                        />
                        {
                            showMediumLabel && (
                                <p className={styles.about_me_social_media_label}>
                                    @Ahmed-Boughdiri
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
