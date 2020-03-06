import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
}   from "react-router-dom";
import AdminMain from "../containers/AdminMain";
import IndexTypes from "../containers/IndexTypes"
import IndexCreature from "../containers/IndexCreature"
import CreatureTypeShowpage from '../components/CreatureTypeShowpage'

const Navigation = props => {
  return (
    <div>
      <nav className="nav">
        <ul className="menu">
          <li>
            <Link to="/creatures">home</Link>
          </li>
          <li>
            <Link to="/creatures/">our magical creatures</Link>
          </li>
          <li>
            <Link to="/creatures/:type/:id">surrender a creature</Link>
          </li>
          <li>
            <Link to="/admin">ADMIN LOGIN</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation

