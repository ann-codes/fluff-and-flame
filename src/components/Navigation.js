import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
}   from "react-router-dom";
import IndexTypes from "../containers/IndexTypes"
import IndexCreature from "../containers/IndexCreature"
import CreatureTypeShowpage from '../components/CreatureTypeShowpage'

const Navigation = props => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul className="menu">
            <li>
              <Link to="/creatures">home</Link>
            </li>
            <li>
              {/* add a placeholder for this */}
              <Link to="/creatures/">our magical creatures</Link>
            </li>
            <li>
              <Link to="/creatures/:type/:id">surrender a creature</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/creatures" component={IndexTypes} />
          <Route exact path="/creatures/:type" component={IndexCreature} />
          <Route exact path="/creatures/:type/:id" component={CreatureTypeShowpage} />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation

