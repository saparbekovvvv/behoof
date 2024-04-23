import React from "react";
import logo from "../../assets/path0.png";
import { NavLink } from "react-router-dom";
import { SlSocialVkontakte } from "react-icons/sl";
import { PiTiktokLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer id="Footer" className="footer-container">
      <div className="container">
        <div className="footer">
          <div className="foot">
            <div className="logo-footer">
              <img src={logo} alt="" />
              <NavLink to="/">Behoof</NavLink>
            </div>
            <div className="socials">
              <span>Мы в соц сетях</span>
              <div className="webs">
                <NavLink to="https://vk.com/">
                  <SlSocialVkontakte />
                </NavLink>
                <NavLink to="https://www.tiktok.com/">
                  <PiTiktokLogoLight />
                </NavLink>
                <NavLink to="https://www.instagram.com/">
                  <FaInstagram />
                </NavLink>
                <NavLink to="https://web.telegram.org/k/">
                  <PiTelegramLogo />
                </NavLink>
                <NavLink to="https://www.youtube.com/">
                  <FiYoutube />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="user-info">
            <span>Пользователю</span>
            <ul>
              <li>Связаться с нами</li>
              <li>Поддерка пользователей</li>
              <li>FAQ & Руководства</li>
              <li>Политика конфиденциальности</li>
              <li>Пользовательское соглашение</li>
            </ul>
          </div>
          <div className="popular-categories">
            <span>Популярные категории</span>
            <ul>
              <li>Смартфоны</li>
              <li>Teteras electricas</li>
              <li>Стиральные машины</li>
              <li>Телевизоры</li>
              <li>Ноутбуки</li>
            </ul>
          </div>
          <div className="behoof-team">
            <span>Команда Behoof</span>
            <ul>
              <li>О нас</li>
              <li>Работа у нас</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright © 2023 Behoof , Inc. Все права защищены</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
