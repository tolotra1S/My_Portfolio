import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        
          <a className="nav-logo">M'lay </a>
      <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"} id="navbar">
            <li className="nav-item">
              <a href="/#Home" activeClassName="active" className="link" onClick={handleClick}> Home </a>
            </li>
            <li className="nav-item">
              <a href="/#About" activeClassName="active" className="link" onClick={handleClick} >About</a>
            </li>
            <li className="nav-item">
              <a href="/#Formation" activeClassName="active" className="link" onClick={handleClick}>Formation/Diplome </a>
            </li>
            <li className="nav-item">
              <a href="/#Competence" activeClassName="active" className="link" onClick={handleClick}>Competence</a>
              </li>
              <li className="nav-item">
              <a href="/#Contact" activeClassName="active" className="link" onClick={handleClick}>Contact Us </a>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          
        
        </div>
      </nav>
    </>
  );
}

export default NavBar;
