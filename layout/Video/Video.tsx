import React from "react";
import styles from "../../styles/layout/video/video.module.css";
import Image from "next/image";
import { useState } from "react";
import { Video as VideoPlayer } from "../../components";

import frenchIcon from "../../assets/icons/french.png";
import englishIcon from "../../assets/icons/english.png";
import tounsiIcon from "../../assets/icons/tounsi.png";

interface VideoProps {
    windowAlreadyExpanded: Boolean
}

export const Video:React.FC<VideoProps> = ({ windowAlreadyExpanded }) => {
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
                    <div className={styles.video_player}>
                        {
                            (languageSelected === "EN") && (
                                <>
                                    <h6 className={styles.title}>
                                        Hey everyone!
                                    </h6>
                                    <p className={styles.paragraph}>
                                        {
                                            `
                                            I'm Ahmed, a 21-year-old full-stack developer who's all about living and breathing code. 
                                            I started my programming journey at the young age of 14 and haven't looked back since.
                                            Web development is where I thrive, with skills spanning ReactJS, NextJS, TailwindCSS, 
                                            NodeJS, TypeScript, MongoDB, MySQL, PHP, Laravel, Python, and more. 
                                            Over the past two years as a freelance developer, I've had the privilege of collaborating with incredible businesses and startups, 
                                            helping them turn their ideas into reality. From building CMS platforms and e-commerce stores to crafting intuitive dashboards, 
                                            I've had the opportunity to work on diverse and exciting projects.
                                            Now, I'm eagerly seeking new adventures and opportunities in welcoming and amazing workspaces. 
                                            Let's join forces and create something remarkable together!                                            
                                            `
                                        }
                                    </p>
                                </>
                            )
                        }
                        {
                            (languageSelected === "FR") && (
                                <div 
                                    className={styles.french}
                                    style={{
                                        paddingTop: !windowAlreadyExpanded ? 120 : 0 
                                    }}    
                                >
                                    <h6 className={styles.title}>
                                        Bonjour à tous!
                                    </h6>
                                    <p className={styles.paragraph}>
                                        {
                                            `
                                            Je m'appelle Ahmed, j'ai 21 ans et je suis développeur full-stack. 
                                            La programmation n'est pas seulement une passion pour moi, c'est un mode de vie. 
                                            J'ai commencé à écrire mes premières lignes de code dès l'âge de 14 ans, et depuis lors, 
                                            j'ai exploré tous les recoins du monde de l'informatique.
                                            Le développement web est mon terrain de jeu, et j'ai acquis une large palette de compétences. 
                                            De ReactJS, NextJS et TailwindCSS à NodeJS, TypeScript, MongoDB, MySQL, 
                                            PHP, Laravel, Python et bien d'autres, je suis un expert polyvalent dans le domaine du web.
                                            Au cours des deux dernières années en tant que développeur freelance, 
                                            j'ai eu l'honneur de collaborer avec des entreprises et des startups incroyables, 
                                            les aidant à concrétiser leurs idées. 
                                            J'ai participé à la création des systèmes de gestion de contenu, 
                                            des boutiques en ligne et de tableaux de bord intuitifs, parmi d'autres projets passionnants.
                                            Aujourd'hui, je suis à la recherche de nouvelles expériences excitantes 
                                            dans des environnements de travail accueillants et exceptionnels. 
                                            Travaillons ensemble pour créer quelque chose d'extraordinaire !
                                            `
                                        }
                                    </p>
                                </div>
                            )
                        }
                        {
                            (languageSelected === "TN") && (
                                <div 
                                    className={styles.tounsi}
                                    style={{
                                        paddingTop: !windowAlreadyExpanded ? 120 : 0
                                    }}    
                                >
                                    <h6 className={styles.title}>
                                        Aslema!
                                    </h6>
                                    <p className={styles.paragraph}>
                                        {
                                            `
                                            esmi Ahmed, omri 21 ans, et je suis développeur full-stack, belnesbe leya, 
                                            le programmation n'est pas seulement une passion, c'est un mode de vie, 
                                            el ghram mte3i bel programmation bde melli ken omri 14 ans, 
                                            w men wekthe w ena nhawel kad manejem eni netaamlem le maximum possibles 
                                            fel domaines mtee3 l IT.
                                            Le développement web est mon terrain de jeu, et j'ai acquis une large palette de compétences, 
                                            mel ReactJS, NextJS et TailwindCSS à NodeJS, TypeScript, MongoDB, MySQL, PHP, Laravel, 
                                            Python et bien d'autres, je suis un expert polyvalent dans le domaine du web.
                                            Fi ekher aamin, J'ai mis à profit mes compétences pour travailler en tant que freelance, 
                                            w el experience hethi khaletni netaalem barchaa hajet, w kadmetli el opportunity besh nekhdem 
                                            mee des entreprises et des startups incroyables, 
                                            J'ai participé à la création des systèmes de gestion de contenu, 
                                            des boutiques en ligne et des tableaux de bord intuitifs, w barcha d'autres projets passionnants.
                                            Lyouma, je suis à la recherche de nouvelles expériences excitantes 
                                            dans des environnements de travail accueillants et exceptionnels. 
                                            Travaillons ensemble pour créer quelque chose d'extraordinaire !
                                            `
                                        }
                                    </p>
                                </div>
                            )
                        }
                    </div> 
                )
            }
            
        </div>
    )
}
