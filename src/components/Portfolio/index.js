import React, { useState } from 'react';
import Project from "../Project";
import pawsitiveLogo from "../../assets/pawsitiveLogo.png";
import TeeTracker from "../../assets/TeeTrackerCourseLogo.png";
import Asteria from "../../assets/Asteria.png";
import MySQL from "../../assets/MySQL.jpg";
import workdayScheduler from "../../assets/workdayScheduler.jpg";
import code from "../../assets/code.jpg";
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
    link:"https://tee-tracker-f002b4a04af4.herokuapp.com/",
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
  {
    name: 'Weekday Scheduler',
    description:'JavaScript',
    link:"https://github.com/lbuck909/WeekdayScheduler.git",
    repo: "https://github.com/lbuck909/WeekdayScheduler.git",
    img: workdayScheduler
  },
  {
    name: 'NoSQL Social Network',
    description:'MongoDB, Insomnia',
    link:"https://github.com/lbuck909/NoSQL-Social-Network-Challenge.git",
    repo: "https://github.com/lbuck909/NoSQL-Social-Network-Challenge.git",
    img: MySQL
  },
  {
    name: 'Note Taker App',
    description:'Express, JSON',
    link:"https://github.com/lbuck909/Note_Taker_App.git",
    repo: "https://github.com/lbuck909/Note_Taker_App.git",
    img: code
  }
]);

return (
  <div>
  <div className='projects'>
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