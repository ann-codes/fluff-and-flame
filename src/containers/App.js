import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import IndexTypes from "./IndexTypes";

const App = props => {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li>Temp nav bar</li>
            <li>
              <Link to="/creatures">HOME</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/creatures" component={IndexTypes} />
          <Route exact path="/creatures/:type" component={IndexTypes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
