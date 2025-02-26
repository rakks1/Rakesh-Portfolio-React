import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="home-container">
      <div className="bg-animation">
        <div id="stars"></div>
      </div>

<div className="logo">
     <img src="https://github.com/rakks1/Rakesh-Portfolio-React/blob/main/public/assets/logo.png?raw=true" alt="logo" width={'50px'} height={'50px'} />
</div>

<div className="flex-column-a">
 <span className="hi">Hello :{")"}</span>
 <span className="im">I'm</span>
 <span className="rakesh-kumar">{"<"}Rakesh Kumar{"/>"}</span>
 <span className='im'><h1>I'm a</h1><TypingEffect /></span>

 <span className="designing-for-delight">
   Passionate about Designing for Delight and Usability.
 </span>
 
 <div className="frame">
   <a href='https://www.linkedin.com/in/rakesh-kumar-6b7b6b234/' className="linkedin">
     <i className="bi bi-linkedin"></i>
   </a>
   <a href='https://github.com/rakks1' className="github">
     <i className="bi bi-github"></i>
   </a>
   <a href='mailto:rakeshkumarneelankarai@gmail.com' className="circled-envelope">
     <i className="bi bi-envelope-fill"></i>
   </a>
   <a href='https://api.whatsapp.com/send?phone=918667295448' className="whatsapp">
     <i className="bi bi-whatsapp"></i>
   </a>
 </div>

   <Link to="/about" className="more-about-me rectangle-1">More About Me</Link>
   
</div>
</div>
    </div>
  )
}

export default Home;
