import React from "react";
import { ReactComponent as Hemo } from "../../assets/hemoglobin.svg";
const Analyzes = () => {
  return (
    <>
      <div className="analyzes-container mt-5 mr-lg-3 pt-5">
        <div className="analyzes-info">
          <div className="analyzes-info-wrapper">
            <div className="analyzes-info-primary">
              <div className="analyzes-info-primary-title">Dynamic Hb</div>
              <div className="analyzes-info-primary-secondary">97/mmho</div>
              <div className="analyzes-info-primary-secondary">
                Below Normal
              </div>
            </div>
            <div className="analyzes-info-icon">
              <Hemo />
            </div>
          </div>
          <div className="analyzes-info-value">
            <div className="analyzes-info-value-primary">99mmho</div>
          </div>
        </div>
        <div className="analyzes-options">
          Analyzes
          <div className="analyzes-options-menu">Hemoglobin</div>
          <div className="analyzes-options-menu">Hemoglobin</div>
          <div className="analyzes-options-menu">Hemoglobin</div>
          <div className="analyzes-options-menu">Hemoglobin</div>
          <div className="analyzes-options-menu">Hemoglobin</div>
          <div className="analyzes-options-menu">Hemoglobin</div>
        </div>
      </div>
    </>
  );
};

export default Analyzes;
