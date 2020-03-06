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
              <Link to="/adoptions/new">CREATURE YOU WANT TO GIFT?</Link>
            </li>
            <li>
              <Link to="/adopted">HAPPY ADOPTIONS</Link>
            </li>
            <li>
              <Link to="/admin">ADMIN LOGIN</Link>
            </li>
          </ul>
        </nav>
        <Navigation />
        <div className="row medium-10 columns">
          <Switch>
            <Route exact path="/admin" component={AdminMain} />
            <Route exact path="/creatures" component={IndexTypes} />
            <Route exact path="/creatures/:type" component={IndexCreature} />
            <Route exact path="/creatures/:type/:id" component={CreatureTypeShowpage} />
            <Route exact path="/adoptions/new" component={NewCreature} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

