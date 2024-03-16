import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="nav1">
          <h1>
            <NavLink to={"/"}>
              <img src="./images/logo.png" alt="Logo !" />
            </NavLink>
          </h1>
          <ul>
          <li>
              <NavLink className="link" to={"/"}>Homen</NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/obroduvane"}>Оборудование</NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/lims"}>LIMS</NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/library"}>Библиотека</NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/about"}>О компании</NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/events"}>События</NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/contact"}>Контакты</NavLink>
            </li>
          </ul>
         <NavLink to={"/search"}>
            <FontAwesomeIcon
              className="serach_icon"
              icon={faMagnifyingGlass}/>
          </NavLink>
        </div>
      </div>
      <div className="nav2">
        <hr />
        <div className="number_item">
          <FontAwesomeIcon icon={faPhone} />
          <div className="phone_text">
            <p>+7 7172 95 51 11</p>
            <p>+7 7172 95 51 81</p>
          </div>
        </div>
        <hr />
        <div className="number_email">
          <FontAwesomeIcon icon={faEnvelope} />
          <div className="email_text">
            <p className="email">info@qsig.kz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
