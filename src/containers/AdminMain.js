import React, { useState, useEffect } from "react";

import fetchData from "../functions/fetchData";

const AdminMain = props => {
  const [applicants, setApplicants] = useState([]);

  const apiEndpoint = "/api/v1/applicants";
  const fetchApplicants = () => fetchData(apiEndpoint, setApplicants);
  useEffect(fetchApplicants, []);

  console.log(applicants);

  const mapApplicants = applicants.map(app => (
    <tr key={app.id}>
      <td>{app.id}</td>
      <td>{app.name}</td>
      <td>{app.phone_number}</td>
      <td>{app.email}</td>
      <td>{app.home_status}</td>
      <td>
        <a href={`creatures/${app.creature_type}`} target="_blank">{app.creature_name}</a>
      </td>
      <td>{app.adoption_status}</td>
      <td>{app.application_status}</td>
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
