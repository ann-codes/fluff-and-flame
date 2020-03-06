import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminMain from "./AdminMain";
import IndexTypes from "./IndexTypes";
import IndexCreature from "./IndexCreature";
import CreatureTypeShowpage from "../components/CreatureTypeShowpage";
import Navigation from "../components/Navigation"

const App = props => {
  return (
<<<<<<< HEAD
    <Navigation />
=======
    <BrowserRouter>
      <div className="">
        <h1 className="text-center">
          The Grand Order of Fluff and Flame Adoption Agency
        </h1>
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
          <div className="row medium-10 columns">
            <Route exact path="/creatures" component={IndexTypes} />
            <Route exact path="/creatures/:type" component={IndexCreature} />
            <Route
              exact
              path="/creatures/:type/:id"
              component={CreatureTypeShowpage}
            />
            <Route exact path="/admin" component={AdminMain} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
>>>>>>> a9a29513d6221342bb5926e6c59a02fd4fdebcbe
  );
};

export default App;