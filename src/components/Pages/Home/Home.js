import React from "react";
import { useTypewriter } from 'react-simple-typewriter';
 import Button from 'react-bootstrap/Button'; 
import "./home.css";
import CV from "./CV.pdf";
export const Home = () => {
    const [text] = useTypewriter({
      words: [' RANARISON Tolotra', ' Frontend Developer', ' Backend Developer'],
      loop: 0
    })
  return (
    <div className="Home">
    <div className="text">
      
    <div className="ok"><h4>Hello World,</h4></div>
      <div className="ok"><h4 className="Im">I'm -</h4><h4>{text}</h4></div>
    </div> 

    <div> 
    <a href={CV} download={"CV"}>
    <button className="btn">
      <span className="CV">Download CV</span></button>
    </a>
    
    </div>
    </div>
  );
}
