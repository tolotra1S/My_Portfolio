import React from "react";
import Moi from "../../Images/moi.png";
import "./About.css"
export const About = () => {
  return (
    <div id="About" className="About">
      <h1 className="aboutme">About me</h1>
      <div className="containerAbout">
        <div className="intro">
          <label>je m'appelle Tolotra Ranarison et je suis actuellement étudiant à l'ESTI. Je suis une personne déterminée qui se consacre à ses études et qui travaille dur pour atteindre ses objectifs. Je suis motivé et passionné par les nouvelles technologies, l'informatique et la programmation.</label>
          <h3>Nom : Ranarison</h3>
          <h3>Prenom : Tolotra</h3>
          <h3>Telephone : 034 52 211 78</h3>
          <h3>Email : tolotraranarison@gmail.com</h3>
          <h3>Antananarivo Itaosy</h3>

        </div>
        <div className="photo">
            <img src={Moi} className="photoMoi"/>
        </div>
      </div>
    </div>
  );
};
