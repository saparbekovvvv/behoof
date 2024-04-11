import React from "react";
import "./products.css";
import img from "../../assets/phone products.png";
import { LiaStarSolid } from "react-icons/lia";
import { IoCheckmark } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import icon from "../../assets/export.png";
import solid from "../../assets/Icon.png";

const Products: React.FC = () => {
  return (
    <section id="Productss">
      <div className="container">
        <div className="products">
          <h1>Смартфоны</h1>
          <div className="title">
            <p>
              Все что нужно знать при выборе{" "}
              <span className="spans">
                Смартфона <img src={icon} alt="" />
              </span>
            </p>
          </div>
        </div>
        <div className="Product">
          <img className="Phone" src={img} alt="" />
          <div className="Pretitle">
            <div className="Pretext">
              <div className="badgr">
                <h1 className="otsenka">4.4 Оценка экпертов</h1>
                <h1 className="othv">
                  4.0 <img src={solid} alt="" />
                  <img src={solid} alt="" />
                  <img src={solid} alt="" />
                  <img src={solid} alt="" />
                  <LiaStarSolid /> 447 отзывов
                </h1>
              </div>
              <h4 className="icon">
                <CiHeart className="icons" />{" "}
                <IoStatsChartOutline className="icons" />
              </h4>
            </div>
            <div className="Iphones">
              <h1 className="Iphone">Apple iPhone 13 Pro Max 256 ГБ серый</h1>
              <h1 className="price">
                13% <span>78 999 ₽</span>{" "}
              </h1>
            </div>
            <div className="Chracters">
              <li className="charakter">
                <IoCheckmark />
                Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC
              </li>
              <li className="charakter">
                <IoCheckmark />4 GB RAM, 128 GB inbuilt
              </li>
              <li className="charakter">
                <IoCheckmark />
                6.1 inches, 1170 x 2532 px Display with Small Notch
              </li>
              <li className="charakter">
                <IoIosClose />
                Memory Card Not Supporteds
              </li>
              <li className="charakter">
                <IoCheckmark />
                Bionic A15, Hexa Core, 3.22 GHz Processor
              </li>
              <li className="charakter">
                <IoCheckmark />
                3240 mAh Battery with Fast Charging
              </li>
              <li className="charakter">
                <IoCheckmark />
                12 MP + 12 MP Dual Rear & 12 MP Front Camera
              </li>
              <li className="charakter">
                <IoCheckmark />
                iOS v15
              </li>
            </div>
          </div>
          <div className="Fail">
            <h1 className="frame">дизайн</h1>
            <div className="border">
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
            </div>
            <h1 className="frame">Батарея</h1>
            <div className="border">
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
            </div>
            <h1 className="frame">дисплей</h1>
            <div className="border">
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
            </div>
            <h1 className="frame">камера</h1>
            <div className="border">
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
            </div>
            <h1 className="frame">ответ</h1>
            <div className="border">
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
            </div>
            <h1 className="frame">Портативность</h1>
            <div className="border">
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
              <div className="bad"></div>
            </div>
            <button className="btn">Перей к товару</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
