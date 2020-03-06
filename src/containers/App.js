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
      <div className="top-bar topbar-center-logo" id="topbar-center-logo">
        <div className="top-bar-left">
          <ul className="menu vertical medium-horizontal">
            <li><a href="/creatures">Home</a></li>
            <li><a href="/creatures/Nyan Cat">Nyan Cats</a></li>
            <li><a href="/creatures/Dragon">Dragons</a></li>
            <li><a href="/creatures/Unicorn">Unicorns</a></li>
          </ul>
        </div>
        {/* <div className="top-bar-center">
          <a href="#"><img src="https://placehold.it/100x39" alt="" /></a>
        </div> */}
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
          <Route exact path="/creatures" component={IndexTypes} />
          <Route exact path="/creatures/:type" component={IndexCreature} />
          <Route exact path="/creatures/:type/:id" component={CreatureTypeShowpage} />
          <Route exact path="/adoptions/new" component={NewCreature} />
          <Route exact path="/admin" component={AdminMain} />
        </Switch>
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
