import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import IndexTypes from "./IndexTypes";
import IndexCreature from "./IndexCreature";
import CreatureTypeShowpage from "../components/CreatureTypeShowpage";
import NewCreature from "../containers/NewCreature"
import AdminMain from "./AdminMain";
import IndexAdopted from "./IndexAdopted";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const App = props => {
  return (
    <BrowserRouter>
      <div className="">
        <h1 className="text-center mast">
          The Grand Order of Fluff and Flame Adoption Agency
        </h1>
        <nav className="nav">
          <Navigation />
        </nav>
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
    </BrowserRouter>
  );
};

export default App;
