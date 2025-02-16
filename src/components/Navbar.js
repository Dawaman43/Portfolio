import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false); 

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} fixed-top`}>
      <div className="container">
        <Link to="/" className="navbar-brand">Dawit Worku</Link>
        
        {/* Hamburger Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
            <li className="nav-item">
              <button className={`btn btn-sm btn-outline-${theme === 'light' ? 'dark' : 'light'} ml-2`} onClick={toggleTheme}>
                {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
