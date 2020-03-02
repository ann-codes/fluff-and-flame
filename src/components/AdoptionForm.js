import React, { useState } from "react";
import ErrorList from "./ErrorList";
import validateForm from "../functions/validateForm";

const AdoptionForm = props => {
  const defaultApplicant = {
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: ""
  };
  const [newApplicant, setNewApplicant] = useState(defaultApplicant);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setNewApplicant({ ...newApplicant, [name]: value });
  };

  const clearForm = e => {
    e.preventDefault();
    setNewApplicant(defaultApplicant);
  };

  const submitApplicant = e => {
    e.preventDefault();
    if (
      validateForm(
        ["name", "phoneNumber", "email", "homeStatus"],
        newApplicant,
        setErrors
      )
    ) {
      console.log(newApplicant); // ================== awaiting db to post to
    }
  };

  return (
    <form className="callout" onSubmit={submitApplicant}>
      <ErrorList errors={errors} />
      <label>
        Applicant Name*:
        <input
          name="name"
          id="adoptionForm-name"
          type="text"
          value={newApplicant.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number*:
        <input
          name="phoneNumber"
          id="adoptionForm-phoneNumber"
          type="text"
          value={newApplicant.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Email Address*:
        <input
          name="email"
          id="adoptionForm-email"
          type="text"
          value={newApplicant.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Home Status*:
        <select
          name="homeStatus"
          id="adoptionForm-homeStatus"
          value={newApplicant.homeStatus}
          onChange={handleChange}
        >
          <option type="text" value="">
            -
          </option>
          <option type="text" value="rent">
            Rent
          </option>
          <option type="text" value="own">
            Own
          </option>
        </select>
      </label>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" type="button" onClick={clearForm}>
          Clear
        </button>
      </div>
      <div>* denotes required.</div>
    </form>
  );
};

export default AdoptionForm;
