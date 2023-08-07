import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {

  const { link, repo, name, description, img } = project;

  return (
    <div className="project" key={name}>
      <img
        src={img}
        alt={removeHyphensAndCapitalize(name)}
        className="pjt-background"
      />
      <div className="pjt-text1">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
                      </a>
        </h3>
        <p>{description}</p>
      </div>
      {/* <div className="project2" key={name}> */}
      {/* <img
        src={require(`../../assets/TeeTrackerCourseLogo/${name}.jpg`).default}
        alt={removeHyphensAndCapitalize(name)}
        className="pjt-background"
      /> */}
      {/* <div className="pjt-text2">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
      <div className="project3" key={name}> */}
      {/* <img
        src={require(`../../assets/Asteria/${name}.jpg`).default}
        alt={removeHyphensAndCapitalize(name)}
        className="pjt-background"
      /> */}
      {/* <div className="pjt-text3">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Project;