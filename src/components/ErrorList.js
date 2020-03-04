import React from "react";
import _ from "lodash";

const ErrorList = props => {
  const errantFields = Object.keys(props.errors);
  if (errantFields.length > 0) {
    const listItems = errantFields.map((field, i) => (
      <li key={i}>
        {_.capitalize(field)} {props.errors[field]}{" "}
      </li>
    ));

    return (
      <div className="callout alert">
        <ul>{listItems}</ul>
      </div>
    );
  } else {
    return "";
  }
};

export default ErrorList;
