import Image from "next/image";
import styles from "../../styles/layout/portfolio/projectDetails.module.css";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from "react";

import starIcon from "../../assets/icons/rating-star.png";
import eyeIcon from "../../assets/icons/eye-gray.png";
import chainIcon from "../../assets/icons/chain.png";

interface ProjectDetailsProps {
    dir: String,
    thumbnail: any,
    title: String,
    subtitle: String,
    link: String,
    github: String
}

export const ProjectDetails:React.FC<ProjectDetailsProps> = ({ 
    dir,
    thumbnail,
    title,
    subtitle,
    link,
    github
}) => {
    const [projectDescription, setProjectDescription] = useState("");
    const loadProjectDescription = async () => {
        if(!dir) return
        const req = await fetch(`https://ahmed-boughdiri.github.io/ahmed/${dir}`);
        const res = await req.text();
        setProjectDescription(res);
    }
    useEffect(() =>{
        loadProjectDescription();
    }, [dir]);
    return (
        <div className={styles.project_info}>
            {/* Project Options */}
            <div className={styles.project_options}>
                <button 
                    className={styles.project_option}
                    onClick={() => window.open(link as string)}    
                >
                    <Image 
                        src={chainIcon}
                        alt="chain icon"
                        height={20}
                        width={20}
                    />
                    <h6>
                        Visit Website
                    </h6>
                </button>
                <button 
                    className={styles.project_option}
                    onClick={() => window.open(github as string)}    
                >
                    <Image 
                        src={eyeIcon}
                        alt="eye icon"
                        height={20}
                        width={20}
                    />
                    <h6>
                        Preview GitHub
                    </h6>
                </button>
            </div>
            {/* Project Header */}
            <div className={styles.project_info_header}>
                {/* Propject Logo */}
                <div className={styles.product_logo}>
                    <Image 
                        src={thumbnail}
                        alt="the coding pentagon logo"
                        height={36}
                        width={36}
                    />
                </div>
                {/* Project Name */}
                <div>
                    <h6 className={styles.product_name}>
                        { title }
                    </h6>
                    <h6 className={styles.product_genre}>
                        { subtitle }
                    </h6>
                </div>
                {/* Project Fake Rating */}
                <div className={styles.project_rating}>
                    <h6 className={styles.project_rating_label}>
                        4.5
                    </h6>
                    <Image 
                        src={starIcon}
                        alt="star icon"
                        height={22}
                        width={22}
                    />
                </div>
            </div>
            {/* Project Website */}
            <div className={styles.project_website_container}>
                <h6 className={styles.project_website_label}>
                    Website
                </h6>
                <h6 className={styles.project_website}>
                    { link }
                </h6>
            </div>
            {/* Project Description */}
            <div className={styles.project_description_container}>
                <h6 className={styles.project_description_label}>
                    Description
                </h6>
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                >
                    { projectDescription }
                </ReactMarkdown>
            </div>
        </div>
    );
}
