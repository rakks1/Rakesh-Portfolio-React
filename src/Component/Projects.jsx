import React from 'react';
import './Projects.css';
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';


const Projects = () => {
  const testimonialsData1 = [
    {
      name: "Profile-Card-Component",
      image: "https://github.com/rakks1/Profile-Card-Component/blob/main/design/desktop-preview.jpg?raw=true",
      text: "Visit My Challenges",
      link: ""
    },
    {
      name: "Product-preview-card-component",
      image: "https://github.com/rakks1/product-preview-card-component/blob/main/design/desktop-preview.jpg?raw=true",
      text: "Visit My Challenges",
      link: ""    },
    {
      name: "3-column-preview-card-component",
      image: "https://github.com/rakks1/3-column-preview-card-component/blob/main/design/desktop-preview.jpg?raw=true",
      text: "Visit My Challenges",
      link: ""    }
  ];

  const testimonialsData2 = [
    {
      name: "Handicap Website",
      image: "/assets/Handicap.png",
      text: "Visit My Page",
      link: "https://rakks1.github.io/Handicap-Empowerment/index.html"
    },
    {
      name: "Portfolio ",
      image: "/assets/Port.png",
      text: "Visit My Page",
      link: "https://rakks1.github.io/Portfolio-Website/"
    },
    {
        name: "React Portfolio",
        image: "/assets/ReactPort.png",
        text: "You Are Here",
        link: "/"
    },
      {
        name: "React Calculator",
        image: "/assets/Calc.png",
        text: "Visit My Page",
        link: "https://rakks1.github.io/Portfolio-Website/"
      },
      {
        name: "Portfolio Website",
        image: "https://github.com/rakks1/Public/blob/main/HTML/Screenshot_15-12-2024_202850_127.0.0.1.jpeg?raw=true",
        text: "Visit My Page",
        link: "https://rakks1.github.io/Portfolio-Website/"
      }
  ];

  const testimonialsData3 = [
    {
        name: "Figma Portfolio Prototype",
        image: "/assets/figmaport.png",
        text: "Visit My Prototype",
        link: "https://www.figma.com/proto/5yC1tYDpFvZTjFe9BL2LP3/Rakesh-Kumar-Portfolio?page-id=0%3A1&node-id=87-167&viewport=298%2C-127%2C0.23&t=Z6RTiKHzxjOwiRTy-1&scaling=contain&content-scaling=fixed&starting-point-node-id=87%3A167"
    },
    {
      name: "Apple Blog Website Design",
      image: "https://raw.githubusercontent.com/rakks1/Public/refs/heads/main/wpapple1.png",
      link: "",
      text: "Hosting Soon !"

    },
    {
      name: "Apple Blog Website Design",
      image: "https://raw.githubusercontent.com/rakks1/Public/refs/heads/main/wpapple2.png",
      link: "",
      text: "Hosting Soon !"

    }
  ];

  return (
    <div className="pro-container">
      <div className="bg-animation">
        <div id="stars"></div>
      </div>
      <div className="logo">
        <img src="/assets/logo.png" alt="logo" width={'50px'} height={'50px'} />
      </div>
      <h2 className="pro_title">My Projects</h2>
      <div className="gridp container-XS">
        <div className="tone">
          <h4>Front-End Mentor Challenges</h4>
        </div>
        <div className="container_block1" id="container_block1">
          <Testimonials data={testimonialsData1} container="container_block1" />
        </div>

        <div className="ttwo">
          <h4>Front-End Projects</h4>
        </div>
        <div className="container_block2" id="container_block2">
          <Testimonials data={testimonialsData2} container="container_block2" />
        </div>

        <div className="tthree">
          <h4>UI/UX Projects</h4>
        </div>
        <div className="container_block3" id="container_block3">
          <Testimonials data={testimonialsData3} container="container_block3" />
        </div>
      </div>

      <div className="flex-row-2">
          <Link to='/contact' className="rectangle-1 view-resume probtn1" >Get In Touch</Link>
          <Link to='/reactpro' className="rectangle-1 my-experience probtn2" >React Projects</Link>
        </div>
    </div>
  );
};

export default Projects;
