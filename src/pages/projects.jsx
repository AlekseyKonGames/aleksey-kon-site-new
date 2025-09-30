import { ProjectSection } from "../elements/Sections/ProjectSection.jsx";
import { useTranslation } from 'react-i18next';
import { projectsData } from "../data/ProjectsData.js";
export default function Projects() {
    const { t } = useTranslation('projects');
    const projectsLocalizations = t("projects", { returnObjects: true });
    
    return (
        <>
        {projectsLocalizations.map((project, index) => (
            <ProjectSection data={projectsData[index]} key={index} project={project} direction={index % 2 === 0 ? "left" : "right"} />
        ))}
        </>
    );
}