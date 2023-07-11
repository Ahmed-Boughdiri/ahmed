import styles from "../../styles/layout/contact/contact.module.css";
import Image from "next/image";

import linkedinIcon from "../../assets/icons/social/linkedin.png";
import twitterIcon from "../../assets/icons/social/twitter.png";
import mediumIcon from "../../assets/icons/social/medium.png";
import gmailIcon from "../../assets/icons/social/gmail.png";

export const ContactDetails = () => (
    <div className={styles.container}>
        <div className={styles.contact_row}>
            <div className={styles.contact}>
                <Image 
                    src={linkedinIcon}
                    alt="linkedin icon"
                    height={45}
                    width={45}
                />
                <h6>
                    Linkedin
                </h6>
            </div>
            <div className={styles.contact}>
                <Image 
                    src={twitterIcon}
                    alt="twitter icon"
                    height={45}
                    width={45}
                />
                <h6>
                    Twitter
                </h6>
            </div>
        </div>
        <div className={styles.contact_row}>
            <div className={styles.contact}>
                <Image 
                    src={mediumIcon}
                    alt="medium icon"
                    height={45}
                    width={45}
                />
                <h6>
                    Medium
                </h6>
            </div>
            <div className={styles.contact}>
                <Image 
                    src={gmailIcon}
                    alt="email icon"
                    height={45}
                    width={45}
                />
                <h6>
                    Gmail
                </h6>
            </div>
        </div>
    </div>
)
