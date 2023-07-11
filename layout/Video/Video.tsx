import React from "react";
import styles from "../../styles/layout/video/video.module.css";
import Image from "next/image";
import { useState } from "react";

import frenchIcon from "../../assets/icons/french.png";
import englishIcon from "../../assets/icons/english.png";
import tounsiIcon from "../../assets/icons/tounsi.png";

export const Video = () => {
    const [languageSelected, setLanguageSelected] = useState<null | "FR" | "EN" | "TN">(null);
    const handleSelectLanguage = (language: "FR" | "EN" | "TN") =>{
        setLanguageSelected(language);
    }
    return (
        <div className={styles.container}>
            {
                !languageSelected ? (
                    <>
                        <h6>
                            Choose The Language in 
                            Which The Video Will Be Shown in!
                        </h6>
                        <div className={styles.languages}>
                            <div 
                                className={styles.language}
                                onClick={() => handleSelectLanguage("FR")}    
                            >
                                <Image 
                                    src={frenchIcon}
                                    alt="the french flag"
                                    height={63}
                                    width={63}
                                />
                                <h6>
                                    Français
                                </h6>
                            </div>
                            <div 
                                className={styles.language}
                                onClick={() => handleSelectLanguage("EN")}    
                            >
                                <Image 
                                    src={englishIcon}
                                    alt="the USA flag"
                                    height={63}
                                    width={63}
                                />
                                <h6>
                                    English
                                </h6>
                            </div>
                            <div 
                                className={styles.language}
                                onClick={() => handleSelectLanguage("TN")}    
                            >
                                <Image 
                                    src={tounsiIcon}
                                    alt="the tunisian flag"
                                    height={63}
                                    width={63}
                                />
                                <h6>
                                    Tounsi
                                </h6>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        <h1>
                            TODO: IMPLEMENT VIDEO
                        </h1>
                    </div> 
                )
            }
            
        </div>
    )
}
