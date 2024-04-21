import React from "react";
import logo from "../../assets/path0.png";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header id="Header" className=" bg-black">
      <div className="container">
        <div className="header">
          <div className="header-content">
            <img className="logo" src={logo} alt="" />
            <NavLink to="/">Behoof</NavLink>
            <p>
              Лучшие цены <br />в интернет-магазинах{" "}
            </p>
          </div>

          <div className="catalog">
            <button className="header-btn">Каталог товаров</button>

            <div className="catolog-input">
              <input type="text" placeholder="Поиск товаров" />
            </div>

            <div className="nav">
              <div className="nav-links">
                <NavLink to="/favorite">
                  <CiHeart />
                </NavLink>
                <NavLink to="/favorite">
                  <IoStatsChartOutline />
                </NavLink>
                <NavLink to="/favorite">
                  <BsPerson />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
