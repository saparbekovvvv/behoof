import React from "react";
import "./bestChoice.css";
import smartphone from "../../../assets/2272131 1.png";
import notebook from "../../../assets/2272131 1 (1).png";
import tablet from "../../../assets/2272131 1 (2).png";
import watches from "../../../assets/2272131 1 (3).png";
import gc from "../../../assets/2272131 1 (4).png";
import headphones from "../../../assets/2272131 1 (5).png";
import jbl from "../../../assets/2272131 1 (6).png";
import accessories from "../../../assets/2272131 1 (7).png";

const BestChoice: React.FC = () => {
  return (
    <section id="BestChoice">
      <div className="container">
        <div className="bestChoice">
          <h1>Лучший выбор</h1>
          <div className="best-choice-img">
            <div className="card">
              <img src={smartphone} alt="" />
              <h3>Смартфоны</h3>
            </div>

            <div className="card">
              <img src={notebook} alt="" />
              <h3>Ноутбуки</h3>
            </div>

            <div className="card">
              <img src={tablet} alt="" />
              <h3>Планшеты</h3>
            </div>

            <div className="card">
              <img src={watches} alt="" />
              <h3>Умные часы</h3>
            </div>

            <div className="card">
              <img src={gc} alt="" />
              <h3>Игровые приставки</h3>
            </div>

            <div className="card">
              <img src={headphones} alt="" />
              <h3>Наушники</h3>
            </div>

            <div className="card">
              <img src={jbl} alt="" />
              <h3>
                Портативные <br />
                колонки
              </h3>
            </div>

            <div className="card">
              <img src={accessories} alt="" />
              <h3>Аксесуары</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BestChoice;
