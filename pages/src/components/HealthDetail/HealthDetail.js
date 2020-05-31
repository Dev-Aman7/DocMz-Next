import React from "react";

const HealthDetail = () => {
  return (
    <>
      <div className="hdetail-container mr-lg-3 ml-lg-3 mt-sm-5">
        <div className="hdetail-main">
          <div className="hdetail-primary">Blood </div>{" "}
          <div className="hdetail-secondary">
            B<span style={{ fontSize: "1.5rem" }}>+</span>
          </div>
        </div>
        <div className="hdetail-main">
          <div className="hdetail-primary">Height </div>{" "}
          <div className="hdetail-secondary">175 cm</div>
        </div>
        <div className="hdetail-main">
          <div className="hdetail-primary">Weight </div>{" "}
          <div className="hdetail-secondary">64 kg</div>
        </div>
        <div className="hdetail-main">
          <div className="hdetail-primary">Pressure </div>{" "}
          <div className="hdetail-secondary">120/81</div>
        </div>
      </div>
    </>
  );
};

export default HealthDetail;
