import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminMain from "./AdminMain";
import IndexTypes from "./IndexTypes";
import IndexCreature from "./IndexCreature";
import CreatureTypeShowpage from "../components/CreatureTypeShowpage";
import Navigation from "../components/Navigation"

const App = props => {
  return (
    <Navigation />
  );
};

export default App;