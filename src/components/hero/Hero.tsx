import phones from "../../assets/Дизайн без названия (4).png";
import { NavLink } from "react-router-dom";
import "./hero.css";
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
            <img src={phones} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
