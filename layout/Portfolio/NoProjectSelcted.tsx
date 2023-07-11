import Image from "next/image";
import styles from "../../styles/layout/portfolio/noProjectSelected.module.css";

import NoProjectSelectedIllustration from "../../assets/illustrations/no-project-selected.png";

export const NoProjectSelected = () => (
    <div className={styles.no_project_selected_container}>
        <Image 
            src={NoProjectSelectedIllustration}
            alt="no project selected illustration"
            height={200}
            width={200}
        />
        <h6>
            Select a Project To Preview
        </h6>
    </div>
);
