import Image from "next/image";
import styles from "../../styles/layout/portfolio/projectDetails.module.css";

import TheCodingPentagon from "../../assets/projects/the-coding-pentagon.png";
import starIcon from "../../assets/icons/rating-star.png";
import eyeIcon from "../../assets/icons/eye-gray.png";
import chainIcon from "../../assets/icons/chain.png";

export const ProjectDetails = () => (
    <div className={styles.project_info}>
        {/* Project Options */}
        <div className={styles.project_options}>
            <button className={styles.project_option}>
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
            <button className={styles.project_option}>
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
                    src={TheCodingPentagon}
                    alt="the coding pentagon logo"
                    height={36}
                    width={36}
                />
            </div>
            {/* Project Name */}
            <div>
                <h6 className={styles.product_name}>
                    The Coding Pentagon
                </h6>
                <h6 className={styles.product_genre}>
                    Educational Platform
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
                https://www.thecodingpentagon.com/
            </h6>
        </div>
        {/* Project Description */}
        <div className={styles.project_description_container}>
            <h6 className={styles.project_description_label}>
                Description
            </h6>
            <p className={styles.project_description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Beatae velit repellat laudantium molestias ea consequuntur alias natus corporis. 
                Sed, dolores blanditiis. Magni, explicabo! Ipsa voluptas harum unde ab nisi earum?
            </p>
            <p className={styles.project_description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Beatae velit repellat laudantium molestias ea consequuntur alias natus corporis. 
                Sed, dolores blanditiis. Magni, explicabo! Ipsa voluptas harum unde ab nisi earum?
            </p>
            <p className={styles.project_description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Beatae velit repellat laudantium molestias ea consequuntur alias natus corporis. 
                Sed, dolores blanditiis. Magni, explicabo! Ipsa voluptas harum unde ab nisi earum?
            </p>
            <p className={styles.project_description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Beatae velit repellat laudantium molestias ea consequuntur alias natus corporis. 
                Sed, dolores blanditiis. Magni, explicabo! Ipsa voluptas harum unde ab nisi earum?
            </p>
            <p className={styles.project_description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Beatae velit repellat laudantium molestias ea consequuntur alias natus corporis. 
                Sed, dolores blanditiis. Magni, explicabo! Ipsa voluptas harum unde ab nisi earum?
            </p>
        </div>
    </div>
)
