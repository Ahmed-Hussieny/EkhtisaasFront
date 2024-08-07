import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assents/Images/navbar/image 1.png";
import style from "../../Assents/Style/Auth.module.css";

const Navbar = () => {
  return (
    <div>
      <nav
        className={[style.font, "navbar navbar-expand-lg bg-transparent"].join(
          " "
        )}
      >
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
              <li className={["nav-item"].join(" ")}>
                <NavLink                   activeClassName={style.activeNavLink}
 className={["nav-link"].join(" ")} to="/">
                  الرئيسية
                </NavLink>
              </li>
              <li className={["nav-item"].join(" ")}>
                <NavLink                   activeClassName={style.activeNavLink}
 className={["nav-link"].join(" ")} to="/AboutUs">
                  من نحن
                </NavLink>
              </li>
              <li className={["nav-item"].join(" ")}>
                <NavLink                   activeClassName={style.activeNavLink}
 className={["nav-link"].join(" ")} to="/OurServices">
                  خدماتنا
                </NavLink>
              </li>
              <li className={["nav-item"].join(" ")}>
                <NavLink                   activeClassName={style.activeNavLink}
 className={["nav-link"].join(" ")} to="/ContactUs">
                  تواصل معنا
                </NavLink>
              </li>
              <li className={["nav-item"].join(" ")}>
                <NavLink                   activeClassName={style.activeNavLink}
 className={["nav-link"].join(" ")} to="/Search">
                  بحث
                </NavLink>
              </li>
              <li className={["nav-item"].join(" ")}>
                <NavLink                   activeClassName={style.activeNavLink}
 className={[style.navLink,"nav-link"].join(" ")} to="/Admin">
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
