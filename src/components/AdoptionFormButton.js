import React, { useState } from "react";
import AdoptionForm from "./AdoptionForm";

const AdoptionFormButton = props => {
  const [toggleForm, setToggleForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const clickForm = () => setToggleForm(!toggleForm);

  const formProcess = () => {
    if (isSubmitted) {
      return "Thank you for submitting! Your request is in process.";
    } else if (toggleForm) {
      return "Close Form";
    } else {
      return "Adopt me!";
    }
  };

  return (
    <div>
      <button className="button" onClick={clickForm} disabled={isSubmitted}>
        {formProcess()}
      </button>
      {toggleForm && (
        <AdoptionForm submitState={setIsSubmitted} showForm={setToggleForm} />
      )}
    </div>
  );
};

export default AdoptionFormButton;
