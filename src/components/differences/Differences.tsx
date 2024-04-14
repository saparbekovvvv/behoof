import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import x from "../../assets/1.png";
import jieg from "../../assets/1.jpeg";
import "../differences/differences.css";
import { IoMdStar } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { TbNumber12Small } from "react-icons/tb";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

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
            <div className="hero__product">
              <h1>Сравнение товаров</h1>
              <div className="product__1">
                <button>
                  <AiTwotoneDelete />
                  Удалить все списки
                </button>
              </div>
            </div>
            <div className="hero__differences">
              <div className="differences__content">
                <button>
                  Смартфоны 4
                  <img className="button__x" src={x} alt="" />
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
              <div className="Reiting__content">
                <h1 className="Srav">Сравнение товаров</h1>
                <div className="Reiting">
                  <h2>Рейтинг</h2>
                </div>
                <div className="Star">
                  {/* <div className="Star__1"> */}
                  <span>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </span>
                  {/* </div> */}
                  <p>
                    <IoMdStar />
                  </p>
                  <h4>447</h4>

                  <span>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </span>
                  <p>
                    <IoMdStar />
                    <IoMdStar />
                  </p>
                  <h4>100</h4>

                  <span>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </span>
                  <h4>300</h4>

                  <span>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </span>
                  <p>
                    <IoMdStar />
                  </p>
                  <h4>112</h4>
                </div>
                <div className="model">
                  <h2>Модель</h2>
                </div>
                <div className="ProMax">
                  <h5>Apple iPhone 13 Pro Max</h5>
                  <h5>Apple iPhone 13 Pro</h5>
                  <h5>Apple iPhone 13</h5>
                  <h5>Apple iPhone 12</h5>
                </div>
                <div className="Rezula">
                  <h2>Год релиза</h2>
                </div>
                <div className="number">
                  <h5>2021</h5>
                  <h5>2021</h5>
                  <h5>2021</h5>
                  <h5>2021</h5>
                </div>
                <div className="Cores">
                  <h4>
                    <GoDotFill />
                  </h4>
                  <h2>Количество ядер</h2>
                </div>
                <div className="nums">
                  <h1>
                    <TbNumber12Small />
                  </h1>
                  <h5>8</h5>
                  <h5>6</h5>
                  <h5>6</h5>
                </div>
                <div className="netWorks">
                  <h4>
                    <GoDotFill />
                  </h4>
                  <h2>Поддержка сетей 4G (LTE)</h2>
                </div>
                <div className="icons">
                  <h3>
                    <AiOutlineCheck />
                  </h3>
                  <h3>
                    <AiOutlineCheck />
                  </h3>
                  <h2>
                    <AiOutlineClose />
                  </h2>
                  <h3>
                    <AiOutlineCheck />
                  </h3>
                </div>
                <div className="memory">
                  <h4>
                    <GoDotFill />
                  </h4>
                  <h2>Объем встроенной памяти</h2>
                </div>
                <div className="gegeBait">
                  <h5>128 ГБ</h5>
                  <h5>64 ГБ</h5>
                  <h5>64 ГБ</h5>
                  <h5>64 ГБ</h5>
                </div>

                <div className="model">
                  <h2>Модель</h2>
                </div>
                <div className="ProMax">
                  <h5>Apple iPhone 13 Pro Max</h5>
                  <h5>Apple iPhone 13 Pro</h5>
                  <h5>Apple iPhone 13</h5>
                  <h5>Apple iPhone 12</h5>
                </div>
                <div className="Rezula">
                  <h2>Год релиза</h2>
                </div>
                <div className="number">
                  <h5>2021</h5>
                  <h5>2021</h5>
                  <h5>2021</h5>
                  <h5>2021</h5>
                </div>
                <div className="Cores">
                  <h4>
                    <GoDotFill />
                  </h4>
                  <h2>Количество ядер</h2>
                </div>
                <div className="nums">
                  <h1>
                    <TbNumber12Small />
                  </h1>
                  <h5>8</h5>
                  <h5>6</h5>
                  <h5>6</h5>
                </div>
                <div className="netWorks">
                  <h4>
                    <GoDotFill />
                  </h4>
                  <h2>Поддержка сетей 4G (LTE)</h2>
                </div>
                <div className="icons">
                  <h3>
                    <AiOutlineCheck />
                  </h3>
                  <h3>
                    <AiOutlineCheck />
                  </h3>
                  <h2>
                    <AiOutlineClose />
                  </h2>
                  <h3>
                    <AiOutlineCheck />
                  </h3>
                </div>
                <div className="memory">
                  <h4>
                    <GoDotFill />
                  </h4>
                  <h2>Объем встроенной памяти</h2>
                </div>
                <div className="gegeBait">
                  <h5>128 ГБ</h5>
                  <h5>64 ГБ</h5>
                  <h5>64 ГБ</h5>
                  <h5>64 ГБ</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Differences;
