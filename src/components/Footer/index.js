import React from 'react';


function Footer() {

    const icons = [
    {
      name: "github",
      link: "https://github.com/lbuck909",
      image: "../../assets/Git.jpg",
      alt: "GitHub",
     
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/laisha-buck-mph7/",
      image: "../../assets/linkedin.jpg",
      alt: "LinkedIn",
    },
    
  ]

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