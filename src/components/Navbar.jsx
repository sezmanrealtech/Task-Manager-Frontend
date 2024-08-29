import React, { useEffect } from "react";
import navLogo from "../assets/Navlogo.png";
import { Link, useLocation } from "react-router-dom";
import fineGirl from "../assets/fine-girl.png";

const NavBar = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  const allNavLinks = () => {
    return location.pathname === "/" ? (
      <>
        <Link to="/new">New Task</Link>
        <Link to="/tasks">All Task</Link>
      </>
    ) : location.pathname === "/tasks" ? (
      <Link to="/new">New Task</Link>
    ) : location.pathname === "/new" ? (
      <Link to="/tasks">All Task</Link>
    ) : location.pathname === "/new" || location.pathname === "/edit" ? (
      <Link to="/tasks">All Task</Link>
    ) : null;
  };
  return (
    <div className="nav-con">
      <nav className="d-flex align-items-center justify-content-between">
        <Link to={"/"}>
          <img src={fineGirl} alt="" />
        </Link>
        <div className="inner-nav d-flex align-items-center justify-content-between">
          {allNavLinks()}
          <img src={navLogo} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
