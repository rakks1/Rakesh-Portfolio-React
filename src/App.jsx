import { HashRouter  as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './Component/Home';
import About from './Component/About';
import Exp from './Component/Exp';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import ReactProject from './Component/ReactProject';
import Calculator from './Component/Calculator';
import NumberGuessingGame from './Component/NumberGuessingGame';
import Contact from './Component/Contact';
import WeatherApp from './Component/WeatherApp';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(false);


  return (
    <Router>

        <div className="menu-container">

          <div className="burger-menu" onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setIsOpen(!isOpen)}>
            <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
          </div>
          
          <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <Link to="/"onClick={handleClick}>Home</Link>
            <Link to="/about" onClick={handleClick}>About</Link>
            <Link to="/experience" onClick={handleClick}>Experience</Link>
            <Link to="/skills" onClick={handleClick}>Skills</Link>
            <Link to="/projects" onClick={handleClick}>Projects</Link>
            <Link to="/contact" onClick={handleClick}>Contact</Link>
          </div>

        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Exp/>} />  
          <Route path="/skills" element={<Skills/>} />        
          <Route path="/projects" element={<Projects/>} />  
          <Route path="/reactpro" element={<ReactProject/>} /> 
          <Route path="/calc" element={<Calculator/>} />  
          <Route path="/game" element={<NumberGuessingGame/>} />    
          <Route path="/contact" element={<Contact/>} />   
          <Route path="/weather" element={<WeatherApp/>} />      
        </Routes>
    </Router>
  );
}

export default App;