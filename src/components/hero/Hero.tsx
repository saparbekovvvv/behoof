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
}

export default Hero;
