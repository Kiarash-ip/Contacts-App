import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="sideBar__container">
      <ul className="sideBar__list">
        <li className="sideBar__list-item">
          <Link to="/contacts">contacts</Link>
        </li>
        <li className="sideBar__list-item">
          <Link to="/aboutus">about us</Link>
        </li>
      </ul>
    </aside>
  );
}
