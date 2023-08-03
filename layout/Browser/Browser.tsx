import styles from "../../styles/layout/browser/browser.module.css";
import Image from "next/image";
import { files } from "../../global";

import LetterIcon from "../../assets/icons/letter-icon.png";

export const Browser = () => (
    <div className={styles.container}>
        {
            files.map(file => (
                <div 
                    className={styles.file}
                    key={file.name}
                    onDoubleClick={() => window.open(file.link)}
                >
                    <div className={styles.file_thumbnail_container}>
                        <Image 
                            src={file.icon}
                            alt="file icon"
                            height={60}
                            width={60}
                        />
                    </div>
                    <h6>{file.name}</h6>
                </div>
            ))
        }
    </div>
)
