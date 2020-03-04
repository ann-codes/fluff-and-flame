import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import IndexTypes from "./IndexTypes";
import IndexCreature from "./IndexCreature";
import AdminMain from "./AdminMain";

const App = props => {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li>Navigation</li>
            <li>
              <Link to="/creatures">HOME</Link>
            </li>
            <li>
              <Link to="/admin">ADMIN LOGIN</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/creatures" component={IndexTypes} />
          <Route exact path="/creatures/:type" component={IndexCreature} />
          <Route exact path="/admin" component={AdminMain} />

        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
