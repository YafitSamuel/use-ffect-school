import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home Page </Link>
      <Link to="/Teacher">Teacher </Link>
      <Link to="/Pupil">Pupil </Link>
      <Link to="/Parent">Parent</Link>
    </>
  );
};
export default NavBar;
