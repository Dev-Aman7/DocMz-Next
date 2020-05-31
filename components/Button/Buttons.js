import React from "react";
import { ReactComponent as Arrow } from "../../assets/chevron.svg";
const Buttons = () => {
  return (
    <>
      <div className="buttons-wrapper">
        <div className="button-info">Find a doctor</div>
        <div className="button-icon">
          <Arrow />
        </div>
      </div>
    </>
  );
};

export default Buttons;
