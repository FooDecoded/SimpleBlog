import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar({ signout }) {
  let linkStyles = { color: "#F7B638" };
  let [showMenu, toggleMenu] = useState(false);

  return (
    <ul className={"sidebar " + (showMenu && "active")}>
      <h1 className="logo">Simple Blog</h1>
      <li className={"sidebar-link " + (showMenu && "active")}>
        <NavLink activeStyle={linkStyles} to="/list">
          My Posts
        </NavLink>
      </li>
      <li className={"sidebar-link " + (showMenu && "active")}>
        <NavLink activeStyle={linkStyles} to="/create">
          Create new post
        </NavLink>
      </li>
      <li className={"sidebar-link " + (showMenu && "active")}>
        <span className="link" onClick={signout}>
          Logout
        </span>
      </li>
      <li
        className={"menu-btn " + (showMenu && "active")}
        onClick={() => toggleMenu(!showMenu)}
      >
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </li>
    </ul>
  );
}
