import React from "react";

const AboutSection = ({direction = "left", contacts, t }) => {
  const renderContacts = () => {
    if (!contacts || contacts.length === 0) return null;

    return (
      <div className="contacts">
        {contacts.map((c, idx) => (
          <a key={idx} href={c.href} target="_blank" rel="noopener noreferrer">
            <img 
              className="icon-mini" 
              src={c.src} 
              alt={c.alt} 
            />
          </a>
        ))}
      </div>
    );
  };
  
  const animationClass = direction === "left" ? "animate-slideInLeft" : "animate-slideInRight";
  return (
    <section className={`section ${animationClass}`}>
      <h2>{t('title')}</h2>
      <p dangerouslySetInnerHTML={{ __html: t('description') }} />
      {renderContacts()}
    </section>
  );
};

export default AboutSection;