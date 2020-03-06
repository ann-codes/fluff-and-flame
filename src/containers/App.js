import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import IndexTypes from "./IndexTypes";
import IndexCreature from "./IndexCreature";
import CreatureTypeShowpage from "../components/CreatureTypeShowpage";
import NewCreature from "../containers/NewCreature"
import AdminMain from "./AdminMain";

const App = props => {
  return (
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
        </div>
        <div className="top-bar-right">
          <ul className="menu vertical medium-horizontal">
            <li><a href="/creatures/Phoenix">Phoenix</a></li>
            <li><a href="/creatures/Griffin">Griffin</a></li>
            <li><a href="/creatures/Merfolk">Merfolk</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </div>
      </div>
        {/* </nav> */}
        <Switch>
          <div className="row medium-10 columns">
            <Route exact path="/creatures" component={IndexTypes} />
            <Route exact path="/creatures/:type" component={IndexCreature} />
            <Route exact path="/creatures/:type/:id" component={CreatureTypeShowpage} />
            <Route exact path="/adoptions/new" component={NewCreature} />
            <Route exact path="/admin" component={AdminMain} />
          </div>
        </Switch>
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
