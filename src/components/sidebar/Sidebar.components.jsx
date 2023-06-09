import React, { useState } from "react";

import "./Sidebar.style.css";

export default function Sidebar() {
  const [toggle, showMenu] = useState(false);

  const handleNavToggle = () => {
    showMenu(!toggle);
  }

  return (
    <>
      <aside className={toggle ? "aside show_menu" : "aside"}>
        <a href="#home" className="nav_logo">
          <h1>
            AC<span className="point-logo">.</span>
          </h1>
        </a>

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_li">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className="copyright">&copy; 2022 - 2023</span>
        </div>
      </aside>
      <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => handleNavToggle()}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
}
