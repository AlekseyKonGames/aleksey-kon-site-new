import React from "react";
import { useTranslation } from 'react-i18next';
const AboutMe = ({ data, direction = "left"}) => {
  
    const { image, alt} = data;
    const { t, i18n } = useTranslation('aboutMe');

    const animationClass = direction === "left" ? "animate-slideInLeft" : "animate-slideInRight";
    return (
      <section className={`about-me section ${animationClass}`}>
        <h2>{t('maintitle')}</h2>
        <div className="lg:flex lg:justify-center lg:items-center">
          <img className="aleksey-img" src={image} alt={alt} />
          <div className="h-full lg:text-center pl-4">
            <h3 className="mt-4 text-center">{t('name')}</h3>
            <h4 className="text-center">{t('title')}</h4>
            <p>{t('description')}</p>
          </div>
        </div>
      </section>
    );
}
export default AboutMe;