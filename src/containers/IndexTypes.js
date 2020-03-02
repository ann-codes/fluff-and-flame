import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import fetchData from "../functions/fetchData";

const IndexTypes = props => {
  const [creatureTypes, setCreatureTypes] = useState([]);

  const API_ENDPOINT = "/api/v1/creature_types";

  const fetchCreatureTypes = () => fetchData(API_ENDPOINT, setCreatureTypes);

  useEffect(fetchCreatureTypes, []);

  console.log(creatureTypes);

  return <div> List types here</div>;
};

export default IndexTypes;
