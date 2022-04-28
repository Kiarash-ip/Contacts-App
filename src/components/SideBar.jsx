import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="sideBar__container">
      <ul>
        <li>
          <Link to="/contacts">contacts</Link>
        </li>
        <li>
          <Link to="/aboutus">about us</Link>
        </li>
      </ul>
    </aside>
  );
}
