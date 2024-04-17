import React, { useState } from "react";
import "./product.css";
import iphone from "../../assets/172.webp";
import Card from "./productCard/productCard";
import { FaStar } from "react-icons/fa6";
import re from "../../assets/20.jpg";
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
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Product: React.FC = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section id="Product">
            <div className="container">
                <div className="product">
                    <div className="hero">
                        <div className="Phone">
                            <div className="dec">
                                <Swiper
                                    spaceBetween={1}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <img src={iphone} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={iphone} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={iphone} />
                                    </SwiperSlide>
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={1}
                                    slidesPerView={3}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src={iphone} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={iphone} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={iphone} />
                                    </SwiperSlide>
                                </Swiper>
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
                                    Полный список характеристика{" "}
                                    <img src={arrow} alt="" />
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
                                <h1 className="component_text">
                                    Apple iPhone 13 Pro Max 256 ГБ серый
                                </h1>
                                <div className="Apple_star">
                                    <h5>4.4 Отценка экспертов</h5>
                                    <h4 className="othv">
                                        4.0{" "}
                                        <span>
                                            {" "}
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </span>
                                        447 отзывов
                                    </h4>
                                </div>
                                <h5 className="desing">Дизайн</h5>
                                <div className="uroven">
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="bad"></div>
                                </div>
                                <h5 className="desing">Батарея</h5>
                                <div className="uroven">
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="bad"></div>
                                    <div className="bad"></div>
                                    <div className="bad"></div>
                                </div>
                                <h5 className="desing">Дисплей</h5>
                                <div className="uroven">
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="bad"></div>
                                </div>
                                <h5 className="desing">Камера </h5>
                                <div className="uroven">
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                </div>
                                <h5 className="desing">Ответ</h5>
                                <div className="uroven">
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                </div>
                                <h5 className="desing">Портативность</h5>
                                <div className="uroven">
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="badgr"></div>
                                    <div className="bad"></div>
                                </div>
                                <div className="Crown">
                                    <img src={crown} alt="" />
                                    <h5>Самый дешевый</h5>
                                </div>
                                <div className="Price">
                                    <h1>78 999 ₽</h1>
                                    <img src={re} alt="" />
                                </div>
                                <h5 className="dostavka">
                                    Доставка бесплатная
                                </h5>
                                <div className="Sena">
                                    <img src={diag} alt="" />
                                    <h5>
                                        Цена хорошая
                                        <br />
                                        <span>
                                            Исходя из последних 40 дней, сумма
                                            составляет близко к среднему
                                        </span>
                                        80 000 ₽
                                    </h5>
                                </div>
                                <div className="Css"></div>

                                <BsFillRecordCircleFill className="togolok" />
                                <div className="Color">
                                    <h4>Цвет:</h4>
                                    <div className="color"></div>
                                    <div className="color2"></div>

                                    <div className="color3"></div>

                                    <div className="color4"></div>
                                    <div className="color5"></div>

                                    <div className="color6"></div>

                                    <div className="color7"></div>
                                </div>
                                <div className="Pamyat">
                                    <h4>Память:</h4>
                                    <button>128 ГБ</button>
                                    <button>256 ГБ</button>
                                    <button>512 ГБ</button>
                                </div>
                                <div className="Sravnenia">
                                    <button className="btn">
                                        <img src={chart} alt="" />
                                        Сравнить
                                    </button>
                                    <button className="btn2">
                                        <img src={heat} alt="" />В избранное
                                    </button>
                                </div>
                            </div>
                            <div className="Grafic">
                                <h5>История цены</h5>
                                <img src={vector} alt="" />
                                <div className="Month">
                                    <h5>Сентябрь</h5>
                                    <h5>Октябрь</h5>
                                    <h5>Ноябрь</h5>
                                    <h5>Декабрь</h5>
                                    <h5>Январь</h5>
                                    <h5>Февраль</h5>
                                </div>
                            </div>
                            <div className="Uroven_grafic">
                                <div className="histori">
                                    <div className="hs_price">
                                        <h4>81 999 ₽</h4>
                                        <img src={edopado} alt="" />
                                    </div>
                                    <h6>Доставка бесплатно </h6>
                                    <img
                                        className="chart1"
                                        src={chart1}
                                        alt=""
                                    />
                                    <div className="Shop">
                                        <h6>Перейти магазин</h6>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div className="histori">
                                    <div className="hs_price">
                                        <h4>81 999 ₽</h4>
                                        <img src={sitilin} alt="" />
                                    </div>
                                    <h5>Доставка включена в стоимость</h5>
                                    <img
                                        className="chart2"
                                        src={chart2}
                                        alt=""
                                    />
                                    <div className="Shop">
                                        <h6>Перейти магазин</h6>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div className="histori">
                                    <div className="hs_price">
                                        <h4>81 999 ₽</h4>
                                        <img src={sitilin} alt="" />
                                    </div>
                                    <h5>Доставка включена в стоимость</h5>
                                    <img
                                        className="chart2"
                                        src={chart2}
                                        alt=""
                                    />
                                    <div className="Shop">
                                        <h6>Перейти магазин</h6>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div className="histori">
                                    {" "}
                                    <div className="hs_price">
                                        <h4>81 999 ₽</h4>
                                        <img src={edopado} alt="" />
                                    </div>
                                    <h6>Доставка бесплатно </h6>
                                    <img
                                        className="chart1"
                                        src={chart1}
                                        alt=""
                                    />
                                    <div className="Shop">
                                        <h6>Перейти магазин</h6>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div className="histori">
                                    <div className="hs_price">
                                        <h4>81 999 ₽</h4>
                                        <img src={edopado} alt="" />
                                    </div>
                                    <h6>Доставка бесплатно </h6>
                                    <img
                                        className="chart1"
                                        src={chart1}
                                        alt=""
                                    />
                                    <div className="Shop">
                                        <h6>Перейти магазин</h6>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div className="histori">
                                    {" "}
                                    <div className="hs_price">
                                        <h4>81 999 ₽</h4>
                                        <img src={sitilin} alt="" />
                                    </div>
                                    <h5>Доставка включена в стоимость</h5>
                                    <img
                                        className="chart2"
                                        src={chart2}
                                        alt=""
                                    />
                                    <div className="Shop">
                                        <h6>Перейти магазин</h6>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div className="histori">
                                    {" "}
                                    <div className="hs_price">
                                        <h4>81 999 ₽</h4>
                                        <img src={sitilin} alt="" />
                                    </div>
                                    <h5>Доставка включена в стоимость</h5>
                                    <img
                                        className="chart2"
                                        src={chart2}
                                        alt=""
                                    />
                                    <div className="Shop">
                                        <h6>Перейти магазин</h6>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div className="histori">
                                    {" "}
                                    <div className="hs_price">
                                        <h4>81 999 ₽</h4>
                                        <img src={edopado} alt="" />
                                    </div>
                                    <h6>Доставка бесплатно </h6>
                                    <img
                                        className="chart1"
                                        src={chart1}
                                        alt=""
                                    />
                                    <div className="Shop">
                                        <h6>Перейти магазин</h6>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <Card />
                    </div>
                    <h1 className="title">Отзывы</h1>
                    <div className="Komend">
                        <div className="person">
                            <div className="name">
                                <img src={person} alt="" />
                                <h4>
                                    Jerome Bell <br />
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    12.10.23
                                </h4>
                            </div>
                            <h1>
                                Восхитительный мобильный <br />
                                <span>
                                    Я перешел с Samsung через 7 лет без iPhone,
                                    так что это странно и возвращаюсь, однако я
                                    еще не был разочарован, единственное, чего
                                    мне может не хватать, это лучшей камеры, но
                                    этого достаточно, вам нужно все выяснить еще
                                    раз, но, очевидно, рекомендация отсюда 😁 💪🏼
                                </span>
                            </h1>
                        </div>
                        <div className="person">
                            <div className="name">
                                <img src={person2} alt="" />
                                <h4>
                                    Jerome Bell <br />
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    12.10.23
                                </h4>
                            </div>
                            <h1>
                                Восхитительный мобильный <br />
                                <span>
                                    Этот телефон просто работает. Моментальный
                                    отклик на любое действие. Все механизмы
                                    отлажены. В совокупности с остальными
                                    девайсами от apple образует органичную
                                    инфраструктуру, которой легко и просто
                                    пользоваться. Интерфейс не перегружен
                                    бесполезными, запутанными и лишними
                                    элементами, как в Андроид телефонах. Просто
                                    разобраться, где что настроить и при этом не
                                    утонуть в лабиринте из меню, переходов,
                                    надстроек и дополнительных танцев, как в
                                    какой нибудь самсе.
                                </span>
                            </h1>
                        </div>
                        <div className="person">
                            {" "}
                            <div className="name">
                                <img src={person3} alt="" />
                                <h4>
                                    Jerome Bell <br />
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    12.10.23
                                </h4>
                            </div>
                            <h1>
                                Восхитительный мобильный <br />
                                <span>
                                    Самое заметное это производительность, прям
                                    новый уровень в быстродействии, в
                                    повседневных задачах просто летает, отличные
                                    камеры, но сильно выпирают из корпуса. Экран
                                    смотрится отлично, единственное что
                                    беспокоит сколько проживет OLED матрица, как
                                    можно во флагман засунуть экран выгорающий
                                    со временем, есть же у них топовые
                                    практически вечные экраны Mini LED которые в
                                    ipad pro, макбуках и т.д.
                                </span>
                            </h1>
                        </div>
                        <div className="person">
                            {" "}
                            <div className="name">
                                <img src={person4} alt="" />
                                <h4>
                                    Jerome Bell <br />
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    12.10.23
                                </h4>
                            </div>
                            <h1>
                                Восхитительный мобильный <br />
                                <span>
                                    {" "}
                                    Самое заметное это производительность, прям
                                    новый уровень в быстродействии, в
                                    повседневных задачах просто летает, отличные
                                    камеры, но сильно выпирают из корпуса. Экран
                                    смотрится отлично, единственное что
                                    беспокоит сколько проживет OLED матрица, как
                                    можно во флагман засунуть экран выгорающий
                                    со временем, есть же у них топовые
                                    практически вечные экраны Mini LED которые в
                                    ipad pro, макбуках и т.д.
                                </span>
                            </h1>
                        </div>
                        <div className="person">
                            {" "}
                            <div className="name">
                                <img src={person5} alt="" />
                                <h4>
                                    Jerome Bell <br />
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    12.10.23
                                </h4>
                            </div>
                            <h1>
                                Восхитительный мобильный <br />
                                <span>
                                    {" "}
                                    оброго времени суток! Приобрёл данное
                                    устройство в январе 2023 года, и спустя
                                    несколько месяцев обслуживания решил
                                    поделиться впечатлениями об данной модели
                                    телефона. Если вы обладатель Android
                                    устройства, то переход на эту модель
                                    телефона будет что-то невероятное, высокая
                                    производительность, великолепное качество
                                    снимков, видео.
                                </span>
                            </h1>
                        </div>
                        <div className="person">
                            {" "}
                            <div className="name">
                                <img src={person6} alt="" />
                                <h4>
                                    Jerome Bell <br />
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    12.10.23
                                </h4>
                            </div>
                            <h1>
                                Восхитительный мобильный <br />
                                <span>
                                    {" "}
                                    По камере могу сказать что после 11 айфона
                                    особой разницы днем в хороших условиях не
                                    видно, а ночью.(+зум и супер стаб).
                                </span>
                            </h1>
                        </div>
                        <div className="person">
                            {" "}
                            <div className="name">
                                <img src={person7} alt="" />
                                <h4>
                                    Jerome Bell <br />
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    12.10.23
                                </h4>
                            </div>
                            <h1>
                                Восхитительный мобильный <br />
                                <span>
                                    {" "}
                                    По камере могу сказать что после 11 айфона
                                    особой разницы днем в хороших условиях не
                                    видно, а ночью.(+зум и супер стаб).
                                </span>
                            </h1>
                        </div>
                        <div className="person">
                            {" "}
                            <div className="name">
                                <img src={person8} alt="" />
                                <h4>
                                    Jerome Bell <br />
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    12.10.23
                                </h4>
                            </div>
                            <h1>
                                Восхитительный мобильный <br />
                                <span>
                                    Ужасный аккумулятор, держит только 24 часа,
                                    иногда даже меньше. При этом Bluetooth hi-fi
                                    отключены. Навигатором вообще не пользуюсь,
                                    видео не смотрю. В общем ужас!!!!
                                </span>
                            </h1>
                        </div>
                        <div className="person">
                            {" "}
                            <div className="name">
                                <img src={person9} alt="" />
                                <h4>
                                    Jerome Bell <br />
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    12.10.23
                                </h4>
                            </div>
                            <h1>
                                Восхитительный мобильный <br />
                                <span>
                                    Этот телефон просто работает. Моментальный
                                    отклик на любое действие. Все механизмы
                                    отлажены. В совокупности с остальными
                                    девайсами от apple образует органичную
                                    инфраструктуру, которой легко и просто
                                    пользоваться. Интерфейс не перегружен
                                    бесполезными, запутанными и лишними
                                    элементами, как в Андроид телефонах. Просто
                                    разобраться, где что настроить и при этом не
                                    утонуть в лабиринте из меню, переходов,
                                    надстроек и дополнительных танцев, как в
                                    какой нибудь самсе.
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="Btn">
                        <button>Показать еще</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
