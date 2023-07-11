import styles from "../../styles/layout/certifications/certifications.module.css";
import Image from "next/image";
import { certificates } from "../../global";

import fileIcon from "../../assets/icons/file.png";

export const Certifications = () => (
    <div className={styles.container}>
        {
            certificates.map(certificate =>(
                <div 
                    className={styles.file}
                    key={certificate.name}    
                >
                    <Image 
                        src={certificate.icon}
                        alt="file icon"
                        height={22}
                        width={22}
                    />
                    <h6>{certificate.name}</h6>
                    <p id={styles.date}>{certificate.date}</p>
                    <p>{certificate.type}</p>
                    <p>{certificate.size}Ko</p>
                </div>
            ))
        }
    </div>
);
