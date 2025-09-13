import React from "react";

class AboutSection extends React.Component {
  renderContacts() {
    const { contacts } = this.props;
    if (!contacts || contacts.length === 0) return null;

    return (
      <div className="contacts">
        {contacts.map((c, idx) => (
          <a key={idx} href={c.href} target="_blank" rel="noopener noreferrer">
            <img className="icon-mini" src={c.src} alt={c.alt} />
          </a>
        ))}
      </div>
    );
  }

  render() {
    const { title, description } = this.props;

    return (
      <section className="section">
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        {this.renderContacts()}
      </section>
    );
  }
}

export default AboutSection;
