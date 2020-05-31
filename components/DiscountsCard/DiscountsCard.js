import React from "react";
import { ReactComponent as Lungsvec } from "../../assets/lungs_vec.svg";
const DiscountsCard = () => {
  return (
    <>
      <div className="dscards-container mb-3">
        <div className="dscards-info">
          <span className="dscards-info-primary mt-sm-5">
            Today <span style={{ color: "black" }}>10%</span> discounts on lung
            examinations
          </span>
          <span className="dscards-info-secondary mt-sm-3">
            The package price includes consultaion of
            pulmonologist,spirography,cardiogram
          </span>
        </div>
        <div className="dscards-image">
          <Lungsvec />
        </div>
      </div>
    </>
  );
};

export default DiscountsCard;
