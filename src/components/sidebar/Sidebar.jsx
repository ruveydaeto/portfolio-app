import React, { useState } from 'react'
import "./sidebar.css"


export default function Sidebar() {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href='/home#' className='nav__logo'></a>
        <nav className='nav'>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/home#" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#menu" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-note"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
      </aside>


      <div className={toggle ? "nav__toggle nav__toggle-open" :
        "nav__toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};
