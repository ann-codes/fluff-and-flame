import React, { useState } from "react";
import AdoptionForm from "./AdoptionForm";

const AdoptionFormButton = props => {
  const [toggleForm, setToggleForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const clickForm = () => setToggleForm(!toggleForm);

  const formProcess = () => {
    if (isSubmitted) {
      return "Thank you for submitting!";
    } else if (toggleForm) {
      return "Close Form";
    } else {
      return "Adopt me!";
    }
  };

  return (
    <div>
      {isSubmitted && (
        <h3 className="callout">
          Your request has been successfully submitted and is now in process. We
          will contact you in 3-5 days.
        </h3>
      )}
      <button
        className="button large"
        onClick={clickForm}
        disabled={isSubmitted}
      >
        {formProcess()}
      </button>
      {toggleForm && (
        <AdoptionForm
          submitState={setIsSubmitted}
          showForm={setToggleForm}
          creatureId={props.creatureId}
        />
      )}
    </div>
  );
};

export default AdoptionFormButton;
