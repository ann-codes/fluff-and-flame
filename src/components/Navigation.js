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
    <Router>
      <div className="container">
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
        <Switch>
          <div className="row medium-10 columns">
            <Route exact path="/creatures" component={IndexTypes} />
            <Route exact path="/creatures/:type" component={IndexCreature} />
            <Route exact path="/creatures/:type/:id" component={CreatureTypeShowpage} />
            <Route exact path="/admin" component={AdminMain} />
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation

