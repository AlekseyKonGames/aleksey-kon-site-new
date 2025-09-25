import AboutSection from "../elements/Sections/AboutSection.jsx";
import SectionCompanyData from "../data/SectionCompanyData.js";
import SectionAboutData from "../data/SectionAboutData.js";
import aboutMeData from "../data/AboutMeData.js";
import AboutMe from "../elements/Sections/AboutMe.jsx";
import { useTranslation } from 'react-i18next';
import { ProjectSection } from "../elements/Sections/ProjectSection.jsx";
import { ProjectsSectionData } from "../data/ProjectsSectionData.js";
export default function Home() {
  const { t: tCompany } = useTranslation('sectionCompany');
  const { t: tAbout } = useTranslation('sectionAbout');
  return (
    <>
      <AboutSection contacts={SectionCompanyData.contacts} t={tCompany}/>
      <ProjectSection data={ProjectsSectionData} />
      <AboutMe data={aboutMeData} />
      <AboutSection contacts={SectionAboutData.contacts} t={tAbout}/>
    </>
  );
}

 