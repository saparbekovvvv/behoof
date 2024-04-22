<<<<<<< HEAD
import { NavLink } from "react-router-dom";

=======
<<<<<<< HEAD
import { NavLink } from "react-router-dom";

=======
import "./hero.css";
import phone from "../../assets/Дизайн без названия (4).png";
import { NavLink } from "react-router-dom";
>>>>>>> 97a832c9859067a4aed50110b2f70900bf892416
>>>>>>> e456ef855208a7d48f3c61a0389b80df396aedf1
function Hero() {
<<<<<<< HEAD
    return (
        <section id="Main">
            <div className="container">
                <div className="main">
                    <p>
                        1.8 млн товаров в 2272 магазинах найди, сравни, выберай!
                    </p>
                    <button>Перейти к категориям</button>
                </div>
            </div>
        </section>
    );
=======
  return (
    <section id="Hero">
      <div className="container">
<<<<<<< HEAD
        <div className="main">
          <p>1.8 млн товаров в 2272 магазинах найди, сравни, выберай!</p>
          <button>Перейти к категориям</button>
<<<<<<< HEAD
          <NavLink to="differences">сравнение</NavLink>
=======
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
>>>>>>> e456ef855208a7d48f3c61a0389b80df396aedf1
        </div>
      </div>
    </section>
  );
>>>>>>> 6de694871a54639ea294f962efc94591b6cc1dda
}

export default Hero;
