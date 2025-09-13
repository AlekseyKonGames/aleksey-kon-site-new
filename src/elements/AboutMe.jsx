import React from "react";
class AboutMe extends React.Component {
  render() {
    const {maintitle, name, title, image, alt, description } = this.props.data;
    return (
      <section className="about-me section">
        <h2>{maintitle}</h2>
        <div className="lg:flex lg:justify-center lg:items-center">
          <img className="aleksey-img" src={image} alt={alt} />
          <div className="h-full lg:text-center pl-4">
            <h3 className="mt-4 text-center">{name}</h3>
            <h4 className="text-center">{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </section>
    );
  }
}
export default AboutMe;