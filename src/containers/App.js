import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import IndexTypes from "./IndexTypes";
import IndexCreature from "./IndexCreature";
import CreatureTypeShowpage from "../components/CreatureTypeShowpage";
import NewCreature from "../containers/NewCreature"
import AdminMain from "./AdminMain";
import IndexAdopted from "./IndexAdopted";
import Footer from "../components/Footer";

const App = props => {
  return (
    <BrowserRouter>
      <div className="">
        <h1 className="text-center mast">
          The Grand Order of Fluff and Flame Adoption Agency
        </h1>
        <nav>
          <ul>
            <li>Navigation</li>
            <li>
              <Link to="/creatures">HOME</Link>
            </li>
            <li>
              <Link to="/adopted">HAPPY ADOPTIONS</Link>
            </li>
            <li>
              <Link to="/surrender">SURRENDER YOUR CREATURE</Link>
            </li>
            <li>
              <Link to="/admin">ADMIN LOGIN</Link>
            </li>
          </ul>
        </nav>
        <div className="row medium-10 columns">
          <Switch>
            <Route exact path="/admin" component={AdminMain} />
            <Route exact path="/adopted" component={IndexAdopted} />
            <Route exact path="/surrender" component={NewCreature} />
            <Route exact path="/creatures" component={IndexTypes} />
            <Route exact path="/creatures/:type" component={IndexCreature} />
            <Route exact path="/creatures/:type/:id" component={CreatureTypeShowpage} />
            <Route exact path="/adoptions/new" component={NewCreature} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
