import React, { useState } from "react";
import ErrorList from "./ErrorList";
import validateForm from "../functions/validateForm";
import postData from "../functions/postData";

const AdoptionForm = props => {
  const postAPIpath = "/api/v1/applicants";
  const defaultApplicant = {
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: "",
    creature_id: props.creatureId
  };

  const [newApplicant, setNewApplicant] = useState(defaultApplicant);
  const [errors, setErrors] = useState({});

  const clearForm = () => setNewApplicant(defaultApplicant);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setNewApplicant({ ...newApplicant, [name]: value });
  };

  const submitApplicant = event => {
    event.preventDefault();
    if (
      validateForm(
        ["name", "phoneNumber", "email", "homeStatus"],
        newApplicant,
        setErrors
      )
    ) {
      const payload = {
        name: newApplicant.name,
        phone_number: newApplicant.phoneNumber,
        email: newApplicant.email,
        home_status: newApplicant.homeStatus,
        creature_id: newApplicant.creature_id
      };
      postData(postAPIpath, payload);
      clearForm();
      props.submitState(true)
      props.showForm(false)
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
          onChange={handleChange}>
          <option type="text" value="">-</option>
          <option type="text" value="rent">Rent</option>
          <option type="text" value="own">Own</option>
        </select>
      </label>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" type="button" onClick={clearForm}>Clear</button>
      </div>
      <div>* All fields required.</div>
    </form>
  );
};

export default AdoptionForm;
