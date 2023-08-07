import React from 'react';

function Footer() {

    const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/lbuck909"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/laisha-buck-mph7/"
    },
    
  ]

  return (
    <footer className="footer">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;