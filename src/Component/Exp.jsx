import React from 'react';
import './Exp.css';
import { Link } from 'react-router-dom';

const Exp = () => {
  return (
     <div className="exp">
         <div className="bg-animation">
        <div id="stars"></div>
      </div>
      <div className="logo">
     <img src="./assets/logo.png" alt="logo" width={'50px'} height={'50px'} />
     </div>
      <h2 className="exp__title">Professional Experience</h2>
      <h4 className="exp__role">
        WEB DESIGNING INTERN- UI/UX DESIGNER & FRONT-END DEVELOPER<br />
        MAGIC BUS INDIA FOUNDATION
      </h4>
      <p className="exp__date">{'<'}Nov 2024 - Present{'/>'}</p>
      <p className="exp__heading">UI/UX Design: <span className="exp__content"> Figma, Adobe XD, WordPress, Photoshop.</span></p>
      <p className="exp__heading">Front-End Development:<span className="exp__content"> HTML 5, CSS 3, JavaScript, Node.js, React.js, Bootstrap & responsive design.</span></p>
      <p className="exp__heading">Version Control & Tools:<span className="exp__content"> Git, GitHub, Jira, collaboration tools. </span></p>
        
       <p className="exp__content content1"> As a Web Design Intern, I gained hands-on experience in front-end development and
        UI/UX design. I started with foundational skills like HTML, CSS, and JavaScript to
        build responsive web pages. During my internship, I applied these
        skills to create clean, accessible layouts and enhance user
        experience.
      </p>
      <Link to='/skills' className="exp__btn rectangle-1">View Skills</Link>
     </div>
  );
};

export default Exp;