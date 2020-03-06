import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminMain from "./AdminMain";
import IndexTypes from "./IndexTypes";
import IndexCreature from "./IndexCreature";
import CreatureTypeShowpage from "../components/CreatureTypeShowpage";
import Navigation from "../components/Navigation"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const App = props => {
  return (
    <Router>
      <div className="">
        <h1 className="text-center">
          The Grand Order of Fluff and Flame Adoption Agency
        </h1>
        <Navigation />
        <div className="row medium-10 columns">
          <Switch>
            <Route exact path="/admin" component={AdminMain} />
            <Route exact path="/creatures" component={IndexTypes} />
            <Route exact path="/creatures/:type" component={IndexCreature} />
            <Route
              exact
              path="/creatures/:type/:id"
              component={CreatureTypeShowpage}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

