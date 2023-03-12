import React from "react";
import { useTypewriter } from 'react-simple-typewriter';
 import Button from 'react-bootstrap/Button'; 
 import Vector1 from "../../Images/Vector1.png";
 import Vector2 from "../../Images/Vector2.png";
 import Moi from "../../Images/Moi.png";
import "./home.css";

import CV from "../../Files/CV.pdf";
export const Home = () => {
  const transition = { duration: 2, type: "spring" };
    const [text] = useTypewriter({
      words: [' RANARISON Tolotra', ' Frontend Developer', ' Backend Developer'],
      loop: 0
    })
  return (
    <div className="Home">
    <div className="ContainerHome">
        <div className="text">
        
          <div className="Hello"><h4>Hello World,</h4></div>
          <div className="ok"><h4 className="Im">I'm -</h4><h4 className="text">{text}</h4></div>
      </div> 
  <br/>
      <div className="button"> 
        <a href={CV} download={"CV"}>
        <button className="btn">
          <span className="CV">Contact me</span></button>
        </a>
        <a href={CV} download={"CV"}>
        <button className="btn">
          <span className="CV">Download CV</span></button>
        </a>
      
      </div>
    </div>
  
        
    </div>
  );
}
