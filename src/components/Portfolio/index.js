import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
  {
    name: '',
    description:'',
    link:"",
    repo: ""
  },
  {
    name: '',
    description:'',
    link:"",
    repo: ""
  },
  {
    name: '',
    description:'',
    link:"",
    repo: ""
  },
  {
    name: '',
    description:'',
    link:"",
    repo: ""
  },
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