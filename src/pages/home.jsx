import AboutSection from "../elements/AboutSection.jsx";
import SectionCompanyData from "../data/SectionCompanyData.js";
import SectionAboutData from "../data/SectionAboutData.js";
import aboutMeData from "../data/AboutMeData.js";
import AboutMe from "../elements/AboutMe.jsx";
import Header from '../elements/header.jsx';
import Footer from '../elements/Footer.jsx';
import { useTranslation } from 'react-i18next';
export default function Home() {
  const { t: tCompany } = useTranslation('sectionCompany');
  const { t: tAbout } = useTranslation('sectionAbout');
  return (
    <>
    <Header />
    <div className="container mx-auto px-4 pt-4 sm:pt-8 md:px-8">
      <AboutSection contacts={SectionCompanyData.contacts} t={tCompany}/>
      <AboutMe data={aboutMeData} />
      <AboutSection contacts={SectionAboutData.contacts} t={tAbout}/>
    </div>
    <Footer />
    </>
  );
}

 