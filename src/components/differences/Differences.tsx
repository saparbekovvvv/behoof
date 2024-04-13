import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import x from "../../assets/1.png";
import jieg from "../../assets/1.jpeg";
import "../differences/differences.css";
import { IoMdStar } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

const Differences: React.FC = () => {
  return (
    <div className="hero">
      <section id="Differences">
        <div className="container">
          <div className="content">
            <div className="differences">
              <h2>Главная</h2>
              <h1>/</h1>
              <h1>Сравнение</h1>
            </div>
            <div className="rt-1">
              <h1>Сравнение товаров</h1>
              <div className="rt-2">
                <button>
                  <AiTwotoneDelete />
                  Удалить все списки
                </button>
              </div>
            </div>
            <div className="diff">
              <div className="differences__content">
                <button className="ss">
                  Смартфоны 4
                  <img className="x" src={x} alt="" />
                </button>
                <button className="aa">Ноутбуки 2</button>
              </div>
              <div className="difference">
                <div className="Apple">
                  <div className="Product">
                    <img src={jieg} alt="" />
                    <AiTwotoneDelete className="delete" />
                    <h6 className="phone">Смартфоны</h6>
                    <h1>Apple iPhone 13 Pro Max 256 ГБ серый </h1>
                    <h6 className="sena">Цена</h6>
                    <div className="Price">
                      <h2 className="prise">114 099 ₽</h2>
                      <span>
                        <IoIosHeart />
                      </span>
                    </div>
                  </div>
                  <div className="Product">
                    <img src={jieg} alt="" />
                    <AiTwotoneDelete className="delete" />
                    <h6 className="phone">Смартфоны</h6>
                    <h1>Apple iPhone 13 Pro Max 256 ГБ серый </h1>
                    <h6 className="sena">Цена</h6>
                    <div className="Price">
                      <h2 className="prise">114 099 ₽</h2>
                      <span>
                        <IoIosHeart />
                      </span>
                    </div>
                  </div>
                  <div className="Product">
                    <img src={jieg} alt="" />
                    <AiTwotoneDelete className="delete" />
                    <h6 className="phone">Смартфоны</h6>
                    <h1>Apple iPhone 13 Pro Max 256 ГБ серый </h1>
                    <h6 className="sena">Цена</h6>
                    <div className="Price">
                      <h2 className="prise">114 099 ₽</h2>
                      <span>
                        <IoIosHeart />
                      </span>
                    </div>
                  </div>
                  <div className="Product">
                    <img src={jieg} alt="" />
                    <AiTwotoneDelete className="delete" />
                    <h6 className="phone">Смартфоны</h6>
                    <h1>Apple iPhone 13 Pro Max 256 ГБ серый </h1>
                    <h6 className="sena">Цена</h6>
                    <div className="Price">
                      <h2 className="prise">114 099 ₽</h2>
                      <span>
                        <IoIosHeart />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="Srav">Сравнение товаров</h1>
              <div className="Reiting">
                <div className="Star">
                  <span>
                    <IoMdStar />
                  </span>
                  {/* Ratings */}
                </div>
                {/* More Rating components */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Differences;
