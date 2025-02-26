import React from 'react'
import './About.css'
import { Link , useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };
  return (
    <div>
      <div className="about-container">

      <div className="logo">
     <img src="./assets/logo.png" alt="logo" width={'50px'} height={'50px'} />
    </div>
      <div className="bg-animation-1">
        <div id="stars-1"></div>
    </div>
    <i className="bi bi-arrow-left" onClick={handleNavigation}></i>
      <img className='rakksimg' src="./assets/rakks.jpeg" alt="" />
      <span className="about-me">About Me</span>
        <span className="ui-ux-designer">Hello! I'm Rakesh Kumar S, a passionate UI/UX designer and front-end
          developer. With expertise in Figma, Photoshop, HTML5, CSS3,
          JavaScript, Bootstrap, React.js, Node.js, and Git, I create clean,
          responsive, and user-friendly interfaces. I'm committed to continuous
          learning and collaboration, always striving to keep up with the latest
          trends in web development and design.Let's connect and build
          something amazing together! Reach out at rakeshkumarneelankarai@gmail.com or connect with me on LinkedIn.</span>
      <div className="flex-row-2">
          <a to='https://rakks1.github.io/Portfolio-Website/Rakesh%20Kumar%20S%20Profile.pdf' className="rectangle-1 view-resume" >View Resume</a>
          <Link to='/experience' className="rectangle-1 my-experience" >My Experience</Link>
        </div>
      </div>
    </div>
  )
}

export default About
