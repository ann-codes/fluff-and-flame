import React, { useState, useEffect } from "react";
import postData from "../functions/postData";
import fetchData from "../functions/fetchData";
import AdminAdoptReqRow from "../components/AdminAdoptReqRow";
import AdminAdoptReqRowDone from "../components/AdminAdoptReqRowDone";
import AdminAdoptReqHead from "../components/AdminAdoptReqHead";

const AdminAdoptReqIndex = props => {
  const [applicants, setApplicants] = useState([]);
  const [appDecision, setAppDecision] = useState({});

  const apiEndpoint = "/api/v1/applicants";
  const apiPostEndpoint = "/api/v1/applicants/decision";

  const fetchApplicants = () => fetchData(apiEndpoint, setApplicants);
  useEffect(fetchApplicants, []);

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

  const submitDecision = event => {
    const matchId = Number(event.target.getAttribute("data-check-id"));
    if (appDecision.id === matchId) {
      if (appDecision.application_status === "approved") {
        const payloadApproved = {
          app_decision: "approved",
          app_id: appDecision.id,
          creature_id: appDecision.creature_id
        };
        postData(apiPostEndpoint, payloadApproved);
      } else if (appDecision.application_status === "denied") {
        const payloadDenied = {
          app_decision: "denied",
          app_id: appDecision.id,
          creature_id: -1
        };
        postData(apiPostEndpoint, payloadDenied);
      }
    }
  };

  const availToAdopt = applicants.filter(
    app => app.adoption_status === "available" && app.application_status === "pending"
  );
  const notAvailToAdopt = applicants.filter(
    app => app.adoption_status !== "available" || app.application_status !== "pending"
  );

  const mapApplicants = availToAdopt.map(app => (
    <AdminAdoptReqRow
      key={app.id}
      applicant={app}
      handleChange={handleChange}
      submitDecision={submitDecision}
    />
  ));

  const mapDoneApps = notAvailToAdopt.map(app => (
    <AdminAdoptReqRowDone
      key={app.id}
      applicant={app}
      handleChange={handleChange}
      submitDecision={submitDecision}
    />
  ));

  return (
    <div>
      <h3>Pending Adoption Requests</h3>
      <table className="hover">
        <AdminAdoptReqHead />
        <tbody>{mapApplicants}</tbody>
      </table>
      <h3>Decisions Made</h3>
      <table className="hover">
        <AdminAdoptReqHead />
        <tbody>{mapDoneApps}</tbody>
      </table>
    </div>
  );
};

export default AdminAdoptReqIndex;
