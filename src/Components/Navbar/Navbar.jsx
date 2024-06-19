import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assents/Images/navbar/image 1.png';
import style from '../../Assents/Style/Auth.module.css';

const Navbar = () => {
  return (
    <div>
      <nav className={[style.font, 'navbar navbar-expand-lg bg-transparent'].join(' ')}>
        <div className="container-fluid px-lg-5 ">
          <NavLink className="navbar-brand" to="#">
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse w-100 navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-between">
              <li className={[style.navItem, 'nav-item'].join(' ')}>
                <NavLink
                  exact
                  className={[style.navLink, 'nav-link'].join(' ')}
                  activeClassName={style.activeLink}
                  to="/HomePage"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li className={[style.navItem, 'nav-item'].join(' ')}>
                <NavLink
                  exact
                  className={[style.navLink, 'nav-link'].join(' ')}
                  activeClassName={style.activeLink}
                  to="/d"
                >
                  من نحن
                </NavLink>
              </li>
              <li className={[style.navItem, 'nav-item'].join(' ')}>
                <NavLink
                  exact
                  className={[style.navLink, 'nav-link'].join(' ')}
                  activeClassName={style.activeLink}
                  to="/s"
                >
                  خدماتنا
                </NavLink>
              </li>
              <li className={[style.navItem, 'nav-item'].join(' ')}>
                <NavLink
                  exact
                  className={[style.navLink, 'nav-link'].join(' ')}
                  activeClassName={style.activeLink}
                  to="/dd"
                >
                  تواصل معنا
                </NavLink>
              </li>
              <li className={[style.navItem, 'nav-item'].join(' ')}>
                <NavLink
                  exact
                  className={[style.navLink, 'nav-link'].join(' ')}
                  activeClassName={style.activeLink}
                  to="#/ddd"
                >
                  بحث
                </NavLink>
              </li>
              <li className={[style.navItem, 'nav-item'].join(' ')}>
                <NavLink
                  exact
                  className={[style.navLink, 'nav-link'].join(' ')}
                  activeClassName={style.activeLink}
                  to="/"
                >
                  <span>انشاء حساب / تسجيل دخول</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
