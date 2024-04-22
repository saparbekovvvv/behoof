import React, { useState } from "react";
import "./cardHero.css";
import { IoIosHeart } from "react-icons/io";

import { IoIosStats } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import img from "../../../assets/2272131 1.png";
import { NavLink } from "react-router-dom";

const CardHero: React.FC = () => {
  const [activeButtons, setActiveButtons] = useState<Array<boolean>>(
    new Array(6).fill(false)
  );
  const blockContentArray = [1, 2, 3, 4, 5];
  const blocks = [1, 2, 3, 4];

  const handlerButtonClick = (index: number) => {
    setActiveButtons((prev) =>
      prev.map((state, idx) => (idx === index ? !state : state))
    );
  };

  return (
    <section id="CardHero">
      <div className="container">
        <div className="card-hero">
          {[
            "Дизайн",
            "Портативность",
            "Камера",
            "Ответ",
            "Дисплей",
            "Батарея",
          ].map((label, index) => (
            <div key={index} className="card-flex">
              <button
                className="card-hero-button"
                onClick={() => handlerButtonClick(index)}
                style={{
                  color: activeButtons[index] ? "#ff4d4d" : "black",
                }}
              >
                {label}
                {activeButtons[index] && <span>X</span>}
              </button>
            </div>
          ))}
        </div>
        <div className="card-hero-cards">
          {blocks.map(() => (
            <div className="card-heroCard">
              <div className="card-hero-content">
                <h3>Портативные колонки</h3>
                <h1>Apple iPhone 13 Pro Max 256 ГБ серый</h1>
              </div>
              <div className="card-icons">
                <NavLink to="/favorites">
                  <span>
                    <IoIosHeart />
                  </span>
                </NavLink>

                <NavLink to="/differences">
                  <span>
                    <IoIosStats />
                  </span>
                </NavLink>
              </div>
              <div className="design-block">
                <img src={img} alt="Apple iPhone 13 Pro Max 256 ГБ серый" />
                <div className="card-a">
                  {[
                    "Дизайн",
                    "Портативность",
                    "Камера",
                    "Ответ",
                    "Дисплей",
                    "Батарея",
                  ].map((label, index) => (
                    <div className="card-a-item" key={index}>
                      <h1>{label}</h1>
                      <div className="design-section">
                        {blockContentArray.map((ind) => (
                          <div
                            key={ind}
                            className="design-block-item"
                            style={{
                              backgroundColor: activeButtons[index]
                                ? "#000"
                                : "#f7f7f7",
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardHero;
