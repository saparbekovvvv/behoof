<<<<<<< HEAD
import { NavLink } from "react-router-dom";

=======
import "./hero.css";
import phone from "../../assets/Дизайн без названия (4).png";
import { NavLink } from "react-router-dom";
>>>>>>> 97a832c9859067a4aed50110b2f70900bf892416
function Hero() {
  return (
    <section id="Hero">
      <div className="container">
<<<<<<< HEAD
        <div className="main">
          <p>1.8 млн товаров в 2272 магазинах найди, сравни, выберай!</p>
          <button>Перейти к категориям</button>
          <NavLink to="products">Группа продуктов</NavLink>
=======
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
>>>>>>> 97a832c9859067a4aed50110b2f70900bf892416
        </div>
      </div>
    </section>
  );
}

export default Hero;
