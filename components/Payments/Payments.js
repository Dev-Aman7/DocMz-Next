import React, { useState } from "react";

import PaymentCard from "react-payment-card-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Payments = () => {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped(prev => !prev);
  };
  return (
    <>
      <div className="payments-container py-3">
        <div
          className="payments-card"
          onMouseOver={handleFlip}
          onMouseOut={handleFlip}
        >
          <PaymentCard
            bank="itau"
            model="personnalite"
            type="platinum"
            brand="visa"
            number="**** **** **** 4173"
            cvv="202"
            holderName="Owen Lars"
            expiration="12/20"
            flipped={flipped}
          />
        </div>
        <div className="payments-buttons mt-3">
          <div className="payments-buttons-add">
            <div className="text-center">
              {" "}
              <FontAwesomeIcon icon={faPlus} size="1x" />
            </div>
            Add card
          </div>
          <div className="payments-buttons-remove">
            <div className="text-center">
              {" "}
              <FontAwesomeIcon icon={faTimes} size="1x" />
            </div>
            Remove card
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
