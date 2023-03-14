import React from "react";
import Moi from "../../Images/moi.png";
import Mail from "../../Images/mail.png";
import Tel from "../../Images/telephone.png";
import Git from "../../Images/github.png";
import In from "../../Images/linkedin.png";
import Ig from "../../Images/instagram.png";
import Fb from "../../Images/Facebook.png";
import "./About.css"
export const About = () => {
  return (
    <div id="About" className="About">
      <h1 className="aboutme">A propos de moi</h1> <br></br><br></br>
      <div className="containerAbout">
        <div className="photo">
            <img src={Moi} className="photoMoi"/>
        </div>
        <div className="intro">
          
          <h3>Je suis actuellement étudiant L2 à l'ESTI. Je suis une personne déterminée qui se consacre à ses études et qui travaille dur pour atteindre ses objectifs. Je suis motivé et passionné par les nouvelles technologies, l'informatique et la programmation.</h3>
          <br></br>
          <h3><img src={Mail} className="ico"/>tolotraranarison@gmail.com</h3>
          <br></br>
          <h3><img src={Tel} className="ico"/>034 52 211 78</h3>
          <br></br>
          <h3><img src={In} className="ico"/>RANARISON Tolotra</h3>
          <br></br>
          <h3><img src={Git} className="ico"/>tolotra1S</h3>
          <br></br>
          <h3><img src={Fb} className="ico"/>Ranarison tolotras</h3>
        </div>
        
      </div>
    </div>
  );
};
