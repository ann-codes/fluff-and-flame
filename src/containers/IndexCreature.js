import React, {useState, useEffect} from "react";

import fetchData from "../functions/fetchData";
import AllCreaturesTile from '../components/AllCreaturesTile'

const IndexCreature = props => {
  const [creatures, setCreatures] = useState([]);

  const apiEndpoint = `/api/v1/adoptable/1` // hardcoded - update later
  const fetchAdoptableCreatures = () => fetchData(apiEndpoint, setCreatures);
  useEffect(fetchAdoptableCreatures, []);
  console.log(creatures)

  const mapCreatures = creatures.map(creature => (
    <AllCreaturesTile
      key={creature.type_id}
      imgUrl={creature.img_url}
      name={creature.name}
      age={creature.age}
      vacStatus={creature.vaccination_status}
      />
  ));
  return (
    <div>
      <h3>All creatures</h3>
      {mapCreatures}
    </div>
  );
};

export default IndexCreature;
