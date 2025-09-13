import AboutSection from "../elements/AboutSection.jsx";
import SectionCompanyData from "../data/SectionCompanyData.js";
import SectionAboutData from "../data/SectionAboutData.js";
import aboutMeData from "../data/AboutMeData.js";
import AboutMe from "../elements/AboutMe.jsx";
export default function Home() {

  return (
    <div>
      <AboutSection
        title={SectionCompanyData.title}
        description={SectionCompanyData.description}
        contacts={SectionCompanyData.contacts}/>

        <AboutMe data={aboutMeData} />

        <AboutSection
        title={SectionAboutData.title}
        description={SectionAboutData.description}
        contacts={SectionAboutData.contacts}/>
    </div>
  );
}

 