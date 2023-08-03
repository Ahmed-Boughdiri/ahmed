import styles from "../../styles/layout/contact/contact.module.css";
import Image from "next/image";

import linkedinIcon from "../../assets/icons/social/linkedin.png";
import twitterIcon from "../../assets/icons/social/twitter.png";
import mediumIcon from "../../assets/icons/social/medium.png";
import gmailIcon from "../../assets/icons/social/gmail.png";

export const ContactDetails = () => (
    <div className={styles.container}>
        <div className={styles.contact_row}>
            <div 
                className={styles.contact}
                onClick={() => window.open("https://www.linkedin.com/in/ahmed-boughdiri/")}    
            >
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
            <div 
                className={styles.contact}
                onClick={() => window.open("https://twitter.com/BoughdiriAhmed")}    
            >
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
            <div 
                className={styles.contact}
                onClick={() => window.open("https://medium.com/@ahmedboughdiri2020")}    
            >
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
            <div 
                className={styles.contact}
                onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ahmedboughdiri2023@gmail.com`)}    
            >
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
