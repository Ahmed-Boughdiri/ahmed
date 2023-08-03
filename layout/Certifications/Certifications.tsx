import styles from "../../styles/layout/certifications/certifications.module.css";
import Image from "next/image";
import { certificates } from "../../global";

export const Certifications = () => (
    <div className={styles.container}>
        {
            certificates.map(certificate =>(
                <div 
                    className={styles.file}
                    key={certificate.name}   
                    onClick={() => window.open(certificate.path)} 
                >
                    <Image 
                        src={certificate.icon}
                        alt="file icon"
                        height={window.innerWidth > 600 ? 22 : 32}
                        width={window.innerWidth > 600 ? 22 : 32}
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
