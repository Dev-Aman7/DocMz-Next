import React from "react";
import { ReactComponent as Cardio } from "../../assets/cardiology.svg";
import { ReactComponent as Tooth } from "../../assets/tooth.svg";
import { ReactComponent as Hearts } from "../../assets/lungs.svg";

const Cards = props => {
  return (
    <>
      <div className="cards-container">
        <div className="cards-body">
          <div className="cards-icon">
            {props.procedure === "Cardio" ? (
              <Cardio />
            ) : "Dentistry" ? (
              <Tooth />
            ) : (
              <Hearts />
            )}
          </div>
          <div className="cards-info">{props.procedure}</div>
          <div className="cards-quote">3 appoinments</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
