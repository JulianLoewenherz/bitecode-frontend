import React from "react";
import './Mission.css'; 
import Splash from "../components/Splash";
import Logo from "../components/Logo";

const Mission = () => {
  return (
    <>
      <Logo color="white" />
      <Splash text="Our Mission" /> 
      
      <div className="mission-content">
        <div className="mission-title">Mission</div>
        
        <div className="row">
          <div className="mission1">
            <h2 className="vision-header">Our Vision</h2>
            <p className="mission-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="mission2">
            <img 
              src="https://assets.entrepreneur.com/content/3x2/2000/20190506145520-GettyImages-1091916996.jpeg" 
              alt="Placeholder" 
              className="mission-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
