import styles from "../../styles/layout/aboutme/aboutme.module.css";
import Image from "next/image";
import { useState } from "react";

import linkedinIcon from "../../assets/icons/social/linkedin.png";
import twitterIcon from "../../assets/icons/social/twitter.png";
import mediumIcon from "../../assets/icons/social/medium.png";
import githubIcon from "../../assets/icons/social/github.png";

import thumbnail from "../../assets/pictures/thumbnail.jpg";

interface AboutMeProps {
    windowAlreadyExpanded: Boolean
}

export const AboutMe:React.FC<AboutMeProps> = ({ windowAlreadyExpanded }) => {
    const [showTwitterLabel, setShowTwitterLabel] = useState(false);
    const [showMediumLabel, setShowMediumLabel] = useState(false);
    const [showLinkedinLabel, setShowLinkedinLabel] = useState(false);
    const [showGithubLabel, setShowGithubLabel] = useState(false);
    return (
        <div className={styles.container}>
            <Image 
                className={styles.about_me_image} 
                src={thumbnail} 
                alt="portfolio thumbnail"
                height={undefined}
                width={undefined}
                style={{
                    width: !windowAlreadyExpanded ? "30%" : "23%"
                }}
            />
            <div 
                className={styles.about_me_description}
                style={{
                    width: !windowAlreadyExpanded ? "70%" : "77%",
                    paddingTop: !windowAlreadyExpanded ? 30 : 75
                }}    
            >
                <h1>Ahmed Boughdiri</h1>
                <p>
                    {
                        `
                        Hi, I'm Ahmed, a passionate full-stack developer with a programming journey that began at the age of 14. 
                        Specializing in web development, I thrive in the world of MERN (MongoDB, Express, React, NodeJS). 
                        However, my skills extend beyond those boundaries, 
                        encompassing PHP, Python, React Native, MySQL, WordPress, and more. 
                        As a freelancer, I've had the privilege of collaborating with remarkable businesses and startups, 
                        honing my expertise along the way. 
                        Now, I'm eagerly seeking new and exciting ventures in the ever-evolving IT world.
                        `
                    }
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
                            onClick={() => window.open("https://www.linkedin.com/in/ahmed-boughdiri/")}
                        />
                        {
                            showLinkedinLabel && (
                                <p className={styles.about_me_social_media_label}>
                                    Ahmed Boughdiri
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
                            onClick={() => window.open("https://twitter.com/BoughdiriAhmed")}
                        />
                        {
                            showTwitterLabel && (
                                <p className={styles.about_me_social_media_label}>
                                    @BoughdiriAhmed
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
                            onClick={() => window.open("https://medium.com/@ahmedboughdiri2020")}
                        />
                        {
                            showMediumLabel && (
                                <p className={styles.about_me_social_media_label}>
                                    @ahmedboughdiri2020
                                </p>
                            )
                        }
                    </div>
                    <div>
                        <Image 
                            src={githubIcon}
                            alt="github icon"
                            height={36}
                            width={36}
                            onMouseEnter={() => setShowGithubLabel(true)}
                            onMouseLeave={() => setShowGithubLabel(false)}
                            onClick={() => window.open("https://github.com/Ahmed-Boughdiri")}
                        />
                        {
                            showGithubLabel && (
                                <p className={styles.about_me_social_media_label}>
                                    Ahmed-Boughdiri
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
