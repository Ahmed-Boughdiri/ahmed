import styles from "../../styles/layout/portfolio/banner.module.css";

export const Banner = () => (
    <div className={styles.banner_container}>
        <div className={styles.banner}>
            <h6 className={styles.banner_title}>
                Welcome To My Portfolio
            </h6>
            <h6 className={styles.banner_subtitle}>
                {"This is The Place Where You Can Find Some Of The Previous Projects That I've Been Involved In."}
            </h6>
        </div>
    </div>
)
