import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndexTypes from "../containers/IndexTypes"
import IndexCreature from "../containers/IndexCreature"
import

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
          </ul>
        </nav>
        <Switch>
          <Route exact path="/creatures" component={IndexTypes} />
          <Route exact path="/creatures/:type" component={IndexCreature} />
          <Route exact path="/creatures/:type/:id" component={CreatureTypeShowpage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Navigation

// fix Nav then change App
// New changes
// import Navigation from "../components/Navigation"

// const App = props => {
//   return (
//     <Navigation />