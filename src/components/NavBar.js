import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <nav>
    <NavLink to="/">Home</NavLink><br/>
    <NavLink to="/movies">Movies</NavLink><br/>
    <NavLink to="/directors">Directors</NavLink><br/>
    <NavLink to="/actors">Actors</NavLink>
    </nav>
  </div>;
}

export default NavBar;
