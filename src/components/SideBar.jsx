import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const { pathname } = useLocation();

  return (
    <aside className="sideBar__container">
      <ul className="sideBar__list">
        <li
          className={`sideBar__list-item ${
            pathname == "/contacts" ? "active" : ""
          }`}
        >
          <Link to="/contacts">contacts</Link>
        </li>
        <li
          className={`sideBar__list-item ${
            pathname == "/aboutus" ? "active" : ""
          }`}
        >
          <Link to="/aboutus">about us</Link>
        </li>
      </ul>
    </aside>
  );
}
