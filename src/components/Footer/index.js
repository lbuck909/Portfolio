import React from 'react';
import LkIcon from "../../assets/linkedin.jpg";
import GHIcon from "../../assets/Git.jpg";

function Footer() {
  const icons = [
    {
      name: "github",
      link: "https://github.com/lbuck909",
      image: GHIcon, // Use the imported image variable
      alt: "GitHub",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/laisha-buck-mph7/",
      image: LkIcon, // Use the imported image variable
      alt: "LinkedIn",
    },
  ];

  return (
    <footer className="footer">
      <div className="icon-container">
        {icons.map(icon => (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
            <img src={icon.image} alt={icon.alt} />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
