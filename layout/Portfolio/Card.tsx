import Image from "next/image";
import styles from "../../styles/layout/portfolio/card.module.css";


import starIcon from "../../assets/icons/rating-star.png";
import halfStarIcon from "../../assets/icons/half-star.png";
import eyeIcon from "../../assets/icons/eye.png";

interface CardProps {
    project_name: String,
    logo: any,
    scale?: Number,
    onSelect: () => void
}

export const Card:React.FC<CardProps> = ({
    project_name,
    logo,
    scale=1,
    onSelect
}) => (
    <div className={styles.project_card}>
        <div className={styles.project_logo_container}>
            <Image 
                src={logo}
                height={85}
                width={85}
                alt="the coding pentagon logo"
                style={{
                    scale: scale as number
                }}
            />
        </div>
        <h6 className={styles.prject_name}>
            { project_name }
        </h6>
        <div className={styles.project_ratings_container}>
            <Image 
                src={starIcon}
                height={15}
                width={15}
                alt="star icon"
            />
            <Image 
                src={starIcon}
                height={15}
                width={15}
                alt="star icon"
            />
            <Image 
                src={starIcon}
                height={15}
                width={15}
                alt="star icon"
            />
            <Image 
                src={starIcon}
                height={15}
                width={15}
                alt="star icon"
            />
            <Image 
                src={halfStarIcon}
                height={15}
                width={15}
                alt="half star icon"
            />
        </div>
        <button 
            className={styles.project_preview_button}
                onClick={onSelect}
        >
            <Image 
                src={eyeIcon}
                height={20}
                width={20}
                alt="eye icon"
            />
            <h6>
                Preview
            </h6>
        </button>
    </div>
);
