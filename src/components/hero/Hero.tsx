<<<<<<< HEAD
import { NavLink } from "react-router-dom";

function Hero() {
    return (
        <section id="Main">
            <div className="container">
                <div className="main">
                    <p>
                        1.8 млн товаров в 2272 магазинах найди, сравни, выберай!
                    </p>
                    <button>Перейти к категориям</button>
                    <NavLink to="product">Информация о продукте</NavLink>
                </div>
            </div>
        </section>
    );
=======
import "./hero.css";
import phone from "../../assets/Дизайн без названия (4).png";
import { NavLink } from "react-router-dom";
function Hero() {
  return (
    <section id="Hero">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <p>
              <span>1.8 млн</span> товаров в <span>2272</span> магазинах <br />{" "}
              найди, сравни, выберай!
            </p>
            <NavLink to="/products">
              <button>Перейти к категориям</button>
            </NavLink>
          </div>
          <div className="hero-content-two">
            <p>
              <span>Топ-10 </span> смартфонов 2023 года
            </p>
            <button>Смотреть</button>
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
>>>>>>> 060227cc418932361e39d93a312170a5f7e62397
}

export default Hero;