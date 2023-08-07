import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="https://www.linkedin.com/in/laisha-buck-mph7/">resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="my-skills">
          <li>Bulma</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>HTML</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>HTML</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="my-skills">
          <li>MongoDB, Mongoose</li>
          <li>APIs</li>
          <li>Node</li>
          <li>Sequelize</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
