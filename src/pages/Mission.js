import React from "react";
import './Mission.css'; // Import the CSS file

const Mission = () => {
  return (
    <>
      <div className="mission-title">Mission</div>
      
      <div className="row">
        <div className="mission1">
          <h2 className="vision-header">Our Vision</h2>
          <p className="mission-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
        <div className="mission2">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Placeholder" 
            className="mission-image"
          />
        </div>
      </div>
    </>
  );
};

export default Mission;
