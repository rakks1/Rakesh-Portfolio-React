import React from 'react';
import './Skills.css';
import { Link } from 'react-router-dom';


const Skills = () => {
  return (
    <div className="skill-container">
       <div className="bg-animation">
        <div id="stars"></div>
      </div>
      <div className="logo">
     <img src="./assets/logo.png" alt="logo" width={'50px'} height={'50px'} />
     </div>
      <h2 className="skill__title">My Skills</h2>
      <div className='img-container'>
      <div className='technology rectangle-1'>
    <img className='simg' src="./assets/Html.png" alt="HTML logo" />
    <span>HTML</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/CSS3.png" alt="CSS logo" />
    <span>CSS</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/JavaScript.png" alt="JavaScript logo" />
    <span>JavaScript</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/React.png" alt="React logo" />
    <span>React</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/Bootstrap.png" alt="Bootstrap logo" />
    <span>Bootstrap</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/Java.png" alt="Java logo" />
    <span>Java</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/Selenium.png" alt="Selenium logo" />
    <span>Selenium</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/Git.png" alt="Git logo" />
    <span>Git</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/Figma.png" alt="Figma logo" />
    <span>Figma</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/Photoshop.png" alt="Photoshop logo" />
    <span>Photoshop</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/Adobe.png" alt="Adobe logo" />
    <span>Adobe</span>
</div>
<div className='technology rectangle-1'>
    <img className='simg' src="./assets/WordPress.png" alt="WordPress logo" />
    <span>WordPress</span>
</div>
 </div>
  <Link to='/projects' className="exp__btn rectangle-1">View My Projects</Link>

    </div>
  );
};

export default Skills;
