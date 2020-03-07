import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <ul className="menu align-center">
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
  );
};

export default Navigation;