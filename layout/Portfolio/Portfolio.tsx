import { Banner } from "./Banner";
import styles from "../../styles/layout/portfolio/portfolio.module.css";
import { Card } from "./Card";
import { projects } from "../../global";
import { NoProjectSelected } from "./NoProjectSelcted";
import { ProjectDetails } from "./ProjectDetails";
import { useState } from "react";

export const Portfolio = () => {
    const [showProjectDetails, setShowProjectDetails] = useState(false);
    const handleSelectProject = () => {
        setShowProjectDetails(true);
    }
    return (
        <div className="w-full h-ful">
            {/* Banner */}
            <Banner />
            {/* Projects Display */}
            <div className={styles.projects_container}>
                <h6 className={styles.projects_section_title}>
                    Discover
                </h6>
                <div className={styles.projects_section}>
                    <div className={styles.projects}>
                        {
                            projects.map(project => (
                                <Card 
                                    key={project.name}
                                    project_name={project.name}
                                    logo={project.logo}
                                    scale={project.scale}
                                    onSelect={handleSelectProject}
                                />
                            ))
                        }
                    </div>
                    <div className={styles.project_details}>
                        {/* No Project Selected */}
                        {
                            !showProjectDetails ? (
                                <NoProjectSelected />
                            ) : (
                                <ProjectDetails />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
