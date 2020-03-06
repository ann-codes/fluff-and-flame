import React from "react";

const AdminAdoptReqRow = props => {
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
      <td>
        {props.applicant.application_status === "pending" ? (
          <form onSubmit={props.submitDecision} data-check-id={props.applicant.id}>
            <select
              name="application_status"
              id={props.applicant.id}
              data-creature_id={props.applicant.creature_id}
              onChange={props.handleChange}
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
            </select>
            <input className="button" type="submit" value="Submit" />
          </form>
        ) : (
          `${props.applicant.application_status}`
        )}
      </td>
    </tr>
  );
};

export default AdminAdoptReqRow;
