import React from "react";

const AdminAdoptReqRowDone = props => {
  return (
    <tr>
      <td>{props.applicant.id}</td>
      <td>{props.applicant.name}</td>
      <td>{props.applicant.phone_number}</td>
      <td>{props.applicant.email}</td>
      <td>{props.applicant.home_status}</td>
      <td>
        <a href={`creatures/${props.applicant.creature_type}/${props.applicant.creature_id}`} target="_blank">
          {props.applicant.creature_name}
        </a>
      </td>
      <td>{props.applicant.adoption_status}</td>
      <td>{props.applicant.application_status}</td>
    </tr>
  );
};

export default AdminAdoptReqRowDone;
