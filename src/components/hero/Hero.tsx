<<<<<<< HEAD
import phone from "../../assets/Дизайн без названия (4).png";
import { NavLink } from "react-router-dom";
import "./hero.css";
function Hero() {
  return (
    <section id="Hero">
      <div className="container">
        <div className="main">
          <div className="hero">
            <div className="hero-content">
              <p>
                <span>1.8 млн</span> товаров в <span>2272</span> магазинах{" "}
                <br /> найди, сравни, выберай!
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
<<<<<<< HEAD
                <div className="main">
                    <div className="hero">
                        <div className="hero-content">
                            <p>
                                <span>1.8 млн</span> товаров в <span>2272</span>{" "}
                                магазинах <br /> найди, сравни, выберай!
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
=======
                <div className="hero">
                    <div className="hero-content">
                        <p>
                            <span>1.8 млн</span> товаров в <span>2272</span>{" "}
                            магазинах <br /> найди, сравни, выберай!
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
>>>>>>> 7e0de1e203051d470d1e84f265a9a2f21b0ae4e6
                    </div>
                </div>
            </div>
        </section>
    );
>>>>>>> refs/remotes/origin/develop
}

export default Hero;
