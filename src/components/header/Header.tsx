<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 6de694871a54639ea294f962efc94591b6cc1dda
import logo from "../../assets/path0.png";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

const Header: React.FC = () => {
<<<<<<< HEAD
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
                        <button>Каталог товаров</button>
                        <input type="text" placeholder="Поиск товаров" />

                        <div className="nav">
                            <NavLink to="/favorite">
                                <CiHeart />
                            </NavLink>
                            <NavLink to="/differences">
                                <IoStatsChartOutline />
                            </NavLink>
                            <NavLink to="/auth">
                                <BsPerson />
                            </NavLink>
                        </div>
                    </div>
                </div>
=======
  const [isDropdown, setIsDropdown] = useState(false);
  const dropDown = () => {
    setIsDropdown((prev) => !prev);
  };
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
            <button onClick={dropDown}>Каталог товаров</button>
            <div
              className={isDropdown ? "dropdown-menu active" : "dropdown-menu"}
            >
              <div className="dropdown-content">
                <h1>Каталог товаров</h1>
                <div className="dropdown-list focus">
                  <ul>
                    <li>Смартфоны</li>
                    <li>Ноутбуки</li>
                    <li>Планшеты</li>
                    <li>Умные часы</li>
                    <li>Игровые приставки</li>
                    <li>Наушники</li>
                    <li>Портативные колонки</li>
                    <li>Мониторы</li>
                    <li>Принтеры и сканеры</li>
                    <li>Планшеты и электронные книги</li>
                    <li>Корпуса и блоки питания</li>
                    <li>Аксесуары</li>
                  </ul>
                </div>
              </div>
            </div>
            <input type="text" placeholder="Поиск товаров" />

            <div className="nav">
              <NavLink to="/favorite">
                <CiHeart />
              </NavLink>
              <NavLink to="/favorite">
                <IoStatsChartOutline />
              </NavLink>
              <NavLink to="/favorite">
                <BsPerson />
              </NavLink>
>>>>>>> 6de694871a54639ea294f962efc94591b6cc1dda
            </div>
        </header>
    );
};

export default Header;
