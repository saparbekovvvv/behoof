import React from "react";
import "./product.css";
import iphone from "../../assets/2272131 1.png";
import Card from "./productCard/productCard";
import { LiaStar } from "react-icons/lia";
import re from "../../assets/re.png";
import diag from "../../assets/diag.svg";
import crown from "../../assets/crown.svg";
import chart from "../../assets/chart.svg";
import heat from "../../assets/heart.svg";
import vector from "../../assets/vector.png";
import edopado from "../../assets/edado.png";
import sitilin from "../../assets/ситилин.png";
import chart1 from "../../assets/Chart.png";
import chart2 from "../../assets/chart2.png";
import arrow from "../../assets/Arrow - Right 2.svg";
import person from "../../assets/person.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import person6 from "../../assets/person6.png";
import person7 from "../../assets/person7.png";
import person9 from "../../assets/person9.png";
import person8 from "../../assets/person8.png";

const Product: React.FC = () => {
    return (
        <section id="Product">
            <div className="container">
                <div className="product">
                    <div className="hero">
                        <div className="Phone">
                            <img className="iphone" src={iphone} alt="" />
                            <div className="Phones">
                                <img className="iphones" src={iphone} alt="" />
                                <img className="iphones" src={iphone} alt="" />

                                <img className="iphones" src={iphone} alt="" />
                            </div>
                            <div className="dec">
                                <h1 className="Apple">
                                    Характеристики Apple iPhone 13 Pro Max 256
                                    ГБ серый
                                </h1>
                                <div className="characters">
                                    <h1 className="camera">
                                        Камера <span> 48p MPx</span>
                                    </h1>
                                    <h1 className="system">
                                        система <span>IOS</span>
                                    </h1>
                                    <h1 className="diog">
                                        Диоганаль<span> 6,1"</span>
                                    </h1>
                                    <h1 className="charge">
                                        Зарядка <span> Безпроводная</span>
                                    </h1>
                                </div>
                                <h1 className="type">
                                    Полный список характеристика
                                </h1>
                            </div>
                            <div className="titleText">
                                <h1 className="descrption">Описание</h1>
                                <p className="desck">
                                    Смартфон Apple iPhone 13 выполнен в
                                    компактном корпусе с привлекательной розовой
                                    расцветкой и защищенной конструкцией по
                                    стандарту IP68. Мощный чип A15 Bionic
                                    обеспечивает быструю и стабильную работу при
                                    запуске приложений, просмотре видео,
                                    веб-серфинге и выполнении других задач. На
                                    дисплее 6.1 дюйма OLED выводится четкая и
                                    красочная картинка. На тыловой стороне
                                    расположена камера с двумя датчиками по 12
                                    Мп, которые при поддержке ряда технологий и
                                    функций позволяют создавать реалистичные
                                    снимки в различных условиях. На передней
                                    стороне имеется камера 12 Мп для селфи и
                                    общения. В мобильном устройстве предлагается
                                    широкий набор беспроводных интерфейсов и
                                    разъем Lightning 8-pin. Аккумулятор
                                    гарантирует продолжительное время
                                    автономности. Из особенностей отмечаются
                                    поддержка быстрой зарядки, беспроводной
                                    зарядки и устройств MagSafe с магнитным
                                    позиционированием.
                                </p>
                            </div>
                        </div>
                        <div className="Store">
                            <div className="Store_component">
                                <h1 className="store_text">
                                    Apple iPhone 13 Pro Max 256 ГБ серый
                                </h1>
                                <div className="content">
                                    <h1 className="otsenka">
                                        4.4 Оценка экспертов
                                    </h1>
                                    <h1 className="othv">
                                        4.0 <LiaStar />
                                        <LiaStar />
                                        <LiaStar />
                                        <LiaStar />
                                        <LiaStar /> 447 Отзывов
                                    </h1>
                                </div>
                                <div className="Sravnenia">
                                    <h1 className="desing">Дизайн</h1>
                                    <div className="border">
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="badgra"></div>
                                    </div>
                                    <h1 className="desing">Батарея</h1>
                                    <div className="border">
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="badgra"></div>
                                        <div className="badgra"></div>
                                        <div className="badgra"></div>
                                    </div>
                                    <h1 className="desing">Дисплей</h1>
                                    <div className="border">
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="badgra"></div>
                                    </div>
                                    <h1 className="desing">Камера</h1>
                                    <div className="border">
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                    </div>
                                    <h1 className="desing">Ответ</h1>
                                    <div className="border">
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="badgra"></div>
                                    </div>
                                    <h1 className="desing">Портативность</h1>
                                    <div className="border">
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                        <div className="bad"></div>
                                    </div>
                                    <h1 className="crown">
                                        <img src={crown} alt="" />
                                        Самый дешевый
                                    </h1>
                                    <div className="Price">
                                        <h2 className="rubl">78 999 ₽</h2>
                                        <img src={re} alt="" className="re" />
                                    </div>
                                    <h2 className="free">
                                        Доставка бесплатная
                                    </h2>
                                    <div className="dostavka">
                                        <img
                                            src={diag}
                                            alt=""
                                            className="dia"
                                        />
                                        <h2 className="sena">
                                            Цена хорошая
                                            <br />
                                            <span className="ishod">
                                                Исходя из последних 40 дней,
                                                сумма составляет близко к
                                                среднему
                                            </span>
                                            80 000 ₽
                                        </h2>
                                    </div>
                                    <div className="color">
                                        <div className="bagraund"></div>
                                    </div>
                                    <div className="svet">
                                        <h4 className="svet_text">Цвет:</h4>
                                        <div className="svets">
                                            <div className="colors"></div>
                                            <div className="colors1"></div>
                                            <div className="colors2"></div>
                                            <div className="colors3"></div>
                                            <div className="colors4"></div>
                                            <div className="colors5"></div>
                                            <div className="colors6"></div>
                                            <div className="colors7"></div>
                                        </div>
                                    </div>
                                    <div className="pam">
                                        <h4>Память:</h4>
                                        <button className="pam_btn">
                                            128 ГБ
                                        </button>
                                        <button className="pam_btn">
                                            {" "}
                                            256 ГБ
                                        </button>
                                        <button className="pam_btn">
                                            512 ГБ
                                        </button>
                                    </div>
                                    <div className="buttons">
                                        <button className="srav">
                                            <img src={chart} alt="" /> сравнить
                                        </button>
                                        <button className="ithbr">
                                            <img src={heat} alt="" /> В
                                            избранное
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="grafic">
                                <h4>История Цены</h4>
                                <img src={vector} alt="" />
                                <div className="month">
                                    <h5>Сентябрь</h5>
                                    <h5>Октябрь</h5>
                                    <h5>Ноябрь</h5>
                                    <h5>Декбрь</h5>
                                    <h5>Январь</h5>
                                    <h5>Февраль</h5>
                                </div>
                            </div>
                            <ul className="uroven">
                                <li className="histori">
                                    <div className="eldepad">
                                        <h3>83 999 ₽</h3>
                                        <img
                                            className="img"
                                            src={edopado}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="free">
                                        Доставка бесплатная
                                    </h1>
                                    <img src={chart1} alt="" />
                                    <div className="shop">
                                        <h5 className="pere">
                                            Перейти в магазин
                                        </h5>
                                        <img src={arrow} alt="" />
                                    </div>
                                </li>
                                <li className="histori">
                                    {" "}
                                    <div className="eldepad">
                                        <h3>81 999 ₽</h3>
                                        <img
                                            className="sitilin"
                                            src={sitilin}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="fire">
                                        Доставка включено в стоимость
                                    </h1>
                                    <img src={chart2} alt="" />
                                    <div className="shop">
                                        <h5 className="pere">
                                            Перейти в магазин
                                        </h5>
                                        <img src={arrow} alt="" />
                                    </div>
                                </li>
                                <li className="histori">
                                    {" "}
                                    <div className="eldepad">
                                        <h3>81 999 ₽</h3>
                                        <img
                                            className="sitilin"
                                            src={sitilin}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="fire">
                                        Доставка включено в стоимость
                                    </h1>
                                    <img src={chart2} alt="" />
                                    <div className="shop">
                                        <h5 className="pere">
                                            Перейти в магазин
                                        </h5>
                                        <img src={arrow} alt="" />
                                    </div>
                                </li>
                                <li className="histori">
                                    {" "}
                                    <div className="eldepad">
                                        <h3>83 999 ₽</h3>
                                        <img
                                            className="img"
                                            src={edopado}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="free">
                                        Доставка бесплатная
                                    </h1>
                                    <img src={chart1} alt="" />
                                    <div className="shop">
                                        <h5 className="pere">
                                            Перейти в магазин
                                        </h5>
                                        <img src={arrow} alt="" />
                                    </div>
                                </li>
                                <li className="histori">
                                    <div className="eldepad">
                                        <h3>83 999 ₽</h3>
                                        <img
                                            className="img"
                                            src={edopado}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="free">
                                        Доставка бесплатная
                                    </h1>
                                    <img src={chart1} alt="" />
                                    <div className="shop">
                                        <h5 className="pere">
                                            Перейти в магазин
                                        </h5>
                                        <img src={arrow} alt="" />
                                    </div>
                                </li>
                                <li className="histori">
                                    {" "}
                                    <div className="eldepad">
                                        <h3>81 999 ₽</h3>
                                        <img
                                            className="sitilin"
                                            src={sitilin}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="fire">
                                        Доставка включено в стоимость
                                    </h1>
                                    <img src={chart2} alt="" />
                                    <div className="shop">
                                        <h5 className="pere">
                                            Перейти в магазин
                                        </h5>
                                        <img src={arrow} alt="" />
                                    </div>
                                </li>
                                <li className="histori">
                                    {" "}
                                    <div className="eldepad">
                                        <h3>81 999 ₽</h3>
                                        <img
                                            className="sitilin"
                                            src={sitilin}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="fire">
                                        Доставка включено в стоимость
                                    </h1>
                                    <img src={chart2} alt="" />
                                    <div className="shop">
                                        <h5 className="pere">
                                            Перейти в магазин
                                        </h5>
                                        <img src={arrow} alt="" />
                                    </div>
                                </li>
                                <li className="histori">
                                    {" "}
                                    <div className="eldepad">
                                        <h3>83 999 ₽</h3>
                                        <img
                                            className="img"
                                            src={edopado}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="free">
                                        Доставка бесплатная
                                    </h1>
                                    <img src={chart1} alt="" />
                                    <div className="shop">
                                        <h5 className="pere">
                                            Перейти в магазин
                                        </h5>
                                        <img src={arrow} alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-card">
                        <Card />
                    </div>
                    <h1 className="othv">Отзывы</h1>
                    <ul className="cardlist">
                        <li className="list">
                            <div className="avatar">
                                <img className="person" src={person} alt="" />
                                <h1 className="name">
                                    Jerome Bell <br />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    12.10.23
                                </h1>
                            </div>
                            <h1 className="vosh">Восхитительный мобильный</h1>
                            <p className="coth">
                                Я перешел с Samsung через 7 лет без iPhone, так
                                что это странно и возвращаюсь, однако я еще не
                                был разочарован, единственное, чего мне может не
                                хватать, это лучшей камеры, но этого достаточно,
                                вам нужно все выяснить еще раз, но, очевидно,
                                рекомендация отсюда 😁 💪🏼
                            </p>
                        </li>
                        <li className="list">
                            {" "}
                            <div className="avatar">
                                <img className="person" src={person2} alt="" />
                                <h1 className="name">
                                    Jerome Bell <br />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    12.10.23
                                </h1>
                            </div>
                            <h1 className="vosh">Восхитительный мобильный</h1>
                            <p className="coth">
                                Этот телефон просто работает. Моментальный
                                отклик на любое действие. Все механизмы
                                отлажены. В совокупности с остальными девайсами
                                от apple образует органичную инфраструктуру,
                                которой легко и просто пользоваться. Интерфейс
                                не перегружен бесполезными, запутанными и
                                лишними элементами, как в Андроид телефонах.
                                Просто разобраться, где что настроить и при этом
                                не утонуть в лабиринте из меню, переходов,
                                надстроек и дополнительных танцев, как в какой
                                нибудь самсе.
                            </p>
                        </li>
                        <li className="list">
                            {" "}
                            <div className="avatar">
                                <img className="person" src={person3} alt="" />
                                <h1 className="name">
                                    Jerome Bell <br />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    12.10.23
                                </h1>
                            </div>
                            <h1 className="vosh">Восхитительный мобильный</h1>
                            <p className="coth">
                                Самое заметное это производительность, прям
                                новый уровень в быстродействии, в повседневных
                                задачах просто летает, отличные камеры, но
                                сильно выпирают из корпуса. Экран смотрится
                                отлично, единственное что беспокоит сколько
                                проживет OLED матрица, как можно во флагман
                                засунуть экран выгорающий со временем, есть же у
                                них топовые практически вечные экраны Mini LED
                                которые в ipad pro, макбуках и т.д.
                            </p>
                        </li>
                        <li className="list">
                            <div className="avatar">
                                <img className="person" src={person4} alt="" />
                                <h1 className="name">
                                    Jerome Bell <br />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    12.10.23
                                </h1>
                            </div>
                            <h1 className="vosh">Восхитительный мобильный</h1>
                            <p className="coth">
                                Самое заметное это производительность, прям
                                новый уровень в быстродействии, в повседневных
                                задачах просто летает, отличные камеры, но
                                сильно выпирают из корпуса. Экран смотрится
                                отлично, единственное что беспокоит сколько
                                проживет OLED матрица, как можно во флагман
                                засунуть экран выгорающий со временем, есть же у
                                них топовые практически вечные экраны Mini LED
                                которые в ipad pro, макбуках и т.д.
                            </p>
                        </li>
                        <li className="list">
                            {" "}
                            <div className="avatar">
                                <img className="person" src={person5} alt="" />
                                <h1 className="name">
                                    Jerome Bell <br />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    12.10.23
                                </h1>
                            </div>
                            <h1 className="vosh">Восхитительный мобильный</h1>
                            <p className="coth">
                                оброго времени суток! Приобрёл данное устройство
                                в январе 2023 года, и спустя несколько месяцев
                                обслуживания решил поделиться впечатлениями об
                                данной модели телефона. Если вы обладатель
                                Android устройства, то переход на эту модель
                                телефона будет что-то невероятное, высокая
                                производительность, великолепное качество
                                снимков, видео.
                            </p>
                        </li>
                        <li className="list">
                            {" "}
                            <div className="avatar">
                                <img className="person" src={person6} alt="" />
                                <h1 className="name">
                                    Jerome Bell <br />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    12.10.23
                                </h1>
                            </div>
                            <h1 className="vosh">Восхитительный мобильный</h1>
                            <p className="coth">
                                По камере могу сказать что после 11 айфона
                                особой разницы днем в хороших условиях не видно,
                                а ночью.(+зум и супер стаб).
                            </p>
                        </li>
                        <li className="list">
                            {" "}
                            <div className="avatar">
                                <img className="person" src={person7} alt="" />
                                <h1 className="name">
                                    Jerome Bell <br />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    12.10.23
                                </h1>
                            </div>
                            <h1 className="vosh">Восхитительный мобильный</h1>
                            <p className="coth">
                                По камере могу сказать что после 11 айфона
                                особой разницы днем в хороших условиях не видно,
                                а ночью.(+зум и супер стаб).
                            </p>
                        </li>
                        <li className="list">
                            {" "}
                            <div className="avatar">
                                <img className="person" src={person8} alt="" />
                                <h1 className="name">
                                    Jerome Bell <br />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    12.10.23
                                </h1>
                            </div>
                            <h1 className="vosh">Восхитительный мобильный</h1>
                            <p className="coth">
                                Ужасный аккумулятор, держит только 24 часа,
                                иногда даже меньше. При этом Bluetooth hi-fi
                                отключены. Навигатором вообще не пользуюсь,
                                видео не смотрю. В общем ужас!!!!
                            </p>
                        </li>
                        <li className="list">
                            {" "}
                            <div className="avatar">
                                <img className="person" src={person9} alt="" />
                                <h1 className="name">
                                    Jerome Bell <br />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    <LiaStar />
                                    12.10.23
                                </h1>
                            </div>
                            <h1 className="vosh">Восхитительный мобильный</h1>
                            <p className="coth">
                                Этот телефон просто работает. Моментальный
                                отклик на любое действие. Все механизмы
                                отлажены. В совокупности с остальными девайсами
                                от apple образует органичную инфраструктуру,
                                которой легко и просто пользоваться. Интерфейс
                                не перегружен бесполезными, запутанными и
                                лишними элементами, как в Андроид телефонах.
                                Просто разобраться, где что настроить и при этом
                                не утонуть в лабиринте из меню, переходов,
                                надстроек и дополнительных танцев, как в какой
                                нибудь самсе.
                            </p>
                        </li>
                    </ul>
                    <div className="btn_poka">
                        <button className="poka">Показать еще</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
