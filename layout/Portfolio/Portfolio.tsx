import styles from "../../styles/layout/portfolio/portfolio.module.css";
import { Card } from "./Card";
import { projects } from "../../global";
import { NoProjectSelected } from "./NoProjectSelcted";
import { ProjectDetails } from "./ProjectDetails";
import { useState } from "react";

export const Portfolio = () => {
    const [showProjectDetails, setShowProjectDetails] = useState(false);
    const [projectDescription, setProjectDescription] = useState("");
    const [projectThumbnail, setProjectThumbnail] = useState(null);
    const [projectTitle, setProjectTitle] = useState("");
    const [projectSubtitle, setProjectSubtitle] = useState("");
    const [projectLink, setProjectLink] = useState("");
    const [projectGithub, setProjectGithub] = useState("");
    const handleSelectProject = (
        dir: String,
        thumbnail: any,
        title: String,
        subtitle: String,
        link: String,
        github: String
    ) => {
        setShowProjectDetails(true);
        setProjectDescription(dir as string);
        setProjectThumbnail(thumbnail);
        setProjectTitle(title as string);
        setProjectSubtitle(subtitle as string);
        setProjectLink(link as string);
        setProjectGithub(github as string)
    }

    return (
        <div className="w-full h-ful">
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
                                    onSelect={() => handleSelectProject(
                                        project.dir, 
                                        project.logo, 
                                        project.name,
                                        project.subtitle,
                                        project.website,
                                        project.github
                                    )}
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
                                <ProjectDetails 
                                    dir={projectDescription} 
                                    thumbnail={projectThumbnail}    
                                    title={projectTitle}
                                    subtitle={projectSubtitle}
                                    link={projectLink}
                                    github={projectGithub}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
