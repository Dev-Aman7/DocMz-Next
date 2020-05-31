import React from "react";
import { ReactComponent as Dent } from "../../assets/toothfill.svg";
import { ReactComponent as Cardio } from "../../assets/heartbeat.svg";
import { ReactComponent as Vitamin } from "../../assets/drug.svg";
import { ReactComponent as Drug } from "../../assets/pipette.svg";
const UpcomingCards = props => {
  return (
    <>
      <div
        className={
          props.type !== "dent"
            ? "upcard-container-grey mx-5 mt-3 mb-5"
            : "upcard-container mx-5 mt-5 mb-4"
        }
      >
        <div className="upcard-icon">
          {props.type === "dent" ? (
            <Dent />
          ) : props.type === "vitamin" ? (
            <Vitamin />
          ) : props.type === "drug" ? (
            <Drug />
          ) : (
            <Cardio />
          )}
        </div>
        <div className="upcard-info">
          <div className="upcard-info-primary">Dentist</div>
          <div className="upcard-info-secondary">8:00-9:00</div>
          <div className="upcard-info-secondary">
            Dr.Alex Bengimin <span className="upcard-info-tertiary"></span>(Cab
            39)
          </div>
        </div>
      </div>
    </>
  );
};
export default UpcomingCards;
