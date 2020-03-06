import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminMain from "./AdminMain";
import IndexAdopted from "./IndexAdopted";
import IndexCreature from "./IndexCreature";
import IndexTypes from "./IndexTypes";
import CreatureTypeShowpage from "../components/CreatureTypeShowpage";
import Navigation from "../components/Navigation"
import NewCreature from "../containers/NewCreature"
import Footer from "../components/Footer";

const App = props => {
  return (
    <Router>
      <div className="">
        <h1 className="text-center mast">
          The Grand Order of Fluff and Flame Adoption Agency
        </h1>
        <Navigation />
        <div className="row medium-10 columns">
          <Switch>
            <Route exact path="/admin" component={AdminMain} />
            <Route exact path="/adopted" component={IndexAdopted} />
            <Route exact path="/surrender" component={NewCreature} />
            <Route exact path="/creatures" component={IndexTypes} />
            <Route exact path="/creatures/:type" component={IndexCreature} />
            <Route exact path="/creatures/:type/:id" component={CreatureTypeShowpage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

