import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import IndexTypes from "../containers/IndexTypes"
import IndexCreature from "../containers/IndexCreature"

const Navigation = props => {
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
          </Switch>
        </div>
      </BrowserRouter>
    )
}
export default Navigation

// fix Nav then change App
// New changes
// import Navigation from "../components/Navigation"

// const App = props => {
//   return (
//     <Navigation />