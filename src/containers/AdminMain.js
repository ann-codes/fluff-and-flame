import React, { useState, useEffect } from "react";

import fetchData from "../functions/fetchData";

const AdminMain = props => {
  const [applicants, setApplicants] = useState([]);

  const apiEndpoint = "/api/v1/applicants";
  const fetchApplicants = () => fetchData(apiEndpoint, setApplicants);
  useEffect(fetchApplicants, []);

  const [appDecision, setAppDecision] = useState({});
  const handleChange = event => {
    const { name, value, id } = event.currentTarget;
    const creature_id = event.currentTarget.getAttribute("data-creature_id");

    setAppDecision({
      ...appDecision,
      [name]: value,
      id: Number(id),
      creature_id: Number(creature_id)
    });
  };

  const postQueryAdopted = `WITH app_decision 
  AS (UPDATE adoption_applications SET application_status = 'approved' WHERE id = 1)
  UPDATE adoptable_creatures SET adoption_status = 'adopted' WHERE id = 2`

  const postQueryDenied = `WITH app_decision 
  AS (UPDATE adoption_applications SET application_status = 'approved' WHERE id = 1)
  UPDATE adoptable_creatures SET adoption_status = 'adopted' WHERE id = 2`

  console.log("target", appDecision);

  const submitDecision = event => {
    event.preventDefault();
    console.log(appDecision);
  };

  // will be making below into a component =================
  const mapApplicants = applicants.map(app => (
    <tr key={app.id}>
      <td>{app.id}</td>
      <td>{app.name}</td>
      <td>{app.phone_number}</td>
      <td>{app.email}</td>
      <td>{app.home_status}</td>
      <td>
        <a href={`creatures/${app.creature_type}`} target="_blank">
          {app.creature_name}
        </a>
      </td>
      <td>{app.adoption_status}</td>
      <td>
        {app.application_status === "pending" ? (
          <form onSubmit={submitDecision}>
            <select
              name="applications_status"
              id={app.id}
              value={appDecision.application_status}
              data-creature_id={app.creature_id}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
            </select>
            <input className="button" type="submit" value="Submit" />
          </form>
        ) : (
          `${app.application_status}`
        )}
      </td>
    </tr>
  ));

  return (
    <div>
      <h1>Administrator Portal</h1>

      <table className="hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Applicant Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Home Status</th>
            <th>Creature Name</th>
            <th>Creature Status</th>
            <th>Decision</th>
          </tr>
        </thead>
        <tbody>{mapApplicants}</tbody>
      </table>
    </div>
  );
};

export default AdminMain;
