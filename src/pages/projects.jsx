import { ProjectSection } from "../elements/Sections/ProjectSection.jsx";
import { useTranslation } from 'react-i18next';
import { ProjectsSectionData } from "../data/ProjectsSectionData.js";
export default function Projects() {
    const { t } = useTranslation('projects');
    const projects = t("projects", { returnObjects: true });
    return (
        <>
        {projects.map((project, index) => (
            <ProjectSection data={ProjectsSectionData} key={index} t={project} />
        ))}
        </>
    );
}