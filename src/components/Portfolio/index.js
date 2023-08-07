import React, { useState } from 'react';
import Project from "../Project";
import pawsitiveLogo from "../../assets/pawsitiveLogo.png";
import TeeTracker from "../../assets/TeeTrackerCourseLogo.png";
import Asteria from "../../assets/Asteria.png";
function Portfolio() {

  const [projects] = useState([
  {
    name: 'Pawsitive Connections',
    description:'MySql,Express, Sequelize',
    link:"https://stark-harbor-37192.herokuapp.com/",
    repo: "https://github.com/JTruehitt/Pawsitive_Connections.git",
    img: pawsitiveLogo
  },
  {
    name: 'Tee-Tracker',
    description:'MERN Stack',
    link:"",
    repo: "https://github.com/andyr-dev/Tee-Tracker.git",
    img: TeeTracker
  },
  {
    name: 'Asteria',
    description:'Server-side APIs',
    link:"https://marshallpeters5.github.io/asteria-app/",
    repo: "https://github.com/marshallpeters5/asteria-app.git",
    img: Asteria
  },
  // {
  //   name: '',
  //   description:'',
  //   link:"",
  //   repo: ""
  // },
]);

return (
  <div>
  <div className='flex-row'>
    {projects.map((project, idx) =>(
      <Project
      project={project}
      key={"project" + idx}
      />
    ))}
  </div>
  </div>
)
};
export default Portfolio;