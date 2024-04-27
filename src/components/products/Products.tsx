import React from "react";
import "./products.css";
import img from "../../assets/iphone 13.png";
import heart from "../../assets/Vector.png";
import icon from "../../assets/export.png";
import chat from "../../assets/Chart.png";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Products: React.FC = () => {
    return (
        <section id="Productss">
            <div className="container">
                <div className="products">
                    <h1 className="smart">Смартфоны</h1>
                    <div className="title">
                        <p>
                            Все что нужно знать при выборе{" "}
                            <span className="spans">
                                Смартфона <img src={icon} alt="" />
                            </span>
                        </p>
                    </div>
                </div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
                    <div
                        key={idx}
                        className="groupOfProducts_content_objects_object"
                    >
                        <div className="groupOfProducts_content_objects_object_info_buttons1">
                            <h1 className="groupOfProducts_content_objects_object_info_advantage-name1">
                                Apple iPhone 13 Pro Max 256 ГБ серый
                            </h1>
                            <h1 className="groupOfProducts_content_objects_object_info_advantage-price1">
                                78 999 ₽
                            </h1>
                            <div>
                                <button className="groupOfProducts_content_objects_object_info_button">
                                    <img src={heart} alt="" />
                                </button>
                                <Link
                                    to={"/differences"}
                                    className="groupOfProducts_content_objects_object_info_button"
                                >
                                    <img src={chat} alt="no image" />
                                </Link>
                            </div>
                        </div>
                        <img
                            src={img}
                            alt=""
                            className="groupOfProducts_content_objects_object-img"
                        />
                        <div className="groupOfProducts_content_objects_object_info">
                            <div className="groupOfProducts_content_objects_object_info_buttons">
                                <h1 className="groupOfProducts_content_objects_object_info_advantage-name1">
                                    Apple iPhone 13 Pro Max 256 ГБ серый
                                </h1>
                                <h1 className="groupOfProducts_content_objects_object_info_advantage-price1">
                                    78 999 ₽
                                </h1>
                                <div className="Type">
                                    <h1 className="text">
                                        4.4 Оценка экспертов{" "}
                                    </h1>
                                    <div className="Star">
                                        <h1 className="textt">
                                            4.0{" "}
                                            <span>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                            447 Отзывов
                                        </h1>
                                    </div>{" "}
                                </div>
                                <div>
                                    <button className="groupOfProducts_content_objects_object_info_button">
                                        <img src={heart} alt="" />
                                    </button>
                                    <Link
                                        to={"/differences"}
                                        className="groupOfProducts_content_objects_object_info_button"
                                    >
                                        <img src={chat} alt="no image" />
                                    </Link>
                                </div>
                            </div>
                            <div className="groupOfProducts_content_objects_object_info_advantage">
                                <div className="groupOfProducts_content_objects_object_info_advantage_title">
                                    <h1 className="groupOfProducts_content_objects_object_info_advantage-name">
                                        Apple iPhone 13 Pro Max 256 ГБ серый
                                    </h1>
                                    <h1 className="groupOfProducts_content_objects_object_info_advantage-price">
                                        78 999 ₽
                                    </h1>
                                </div>
                                <div className="groupOfProducts_content_objects_object_info_advantage_info">
                                    <div className="groupOfProducts_content_objects_object_info_advantage_info_block1">
                                        <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                            ✓ Dual Sim, 3G, 4G, 5G, VoLTE,
                                            Wi-Fi, NFC
                                        </h1>
                                        <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                            ✓ 6.1 inches, 1170 x 2532 px Display
                                            with Small Notch
                                        </h1>
                                        <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                            ✓ Bionic A15, Hexa Core, 3.22 GHz
                                            Processor
                                        </h1>
                                        <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                            ✓ 12 MP + 12 MP Dual Rear & 12 MP
                                            Front Camera
                                        </h1>
                                    </div>
                                    <div className="groupOfProducts_content_objects_object_info_advantage_info_block2">
                                        <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                            ✓ 4 GB RAM, 128 GB inbuilt
                                        </h1>
                                        <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                            ✕ Memory Card Not Supported
                                        </h1>
                                        <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                            ✓ 3240 mAh Battery with Fast
                                            Charging
                                        </h1>
                                        <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                            ✓ iOS v15
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="groupOfProducts_content_objects_object_characteristics">
                            <div className="phone_info_infos ">
                                <div className="phone_info_info">
                                    <span>Дизайн</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                    </div>
                                </div>
                                <div className="phone_info_info">
                                    <span>Батарея</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                    </div>
                                </div>
                                <div className="phone_info_info">
                                    <span>Дисплей</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                    </div>
                                </div>
                                <div className="phone_info_info">
                                    <span>Камера</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                    </div>
                                </div>
                                <div className="phone_info_info">
                                    <span>Ответ</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                    </div>
                                </div>
                                <div className="phone_info_info">
                                    <span>Портативность</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                    </div>
                                </div>
                            </div>
                            <button className="groupOfProducts_content_objects_object_characteristics_button">
                                Перейти к товару
                            </button>
                        </div>
                    </div>
                ))}
                <div className="productss">
                    <h1 className="text"> Показ 1 – 10 из 1286</h1>
                    <div className="title2">
                        <p className="pre">
                            назад <span className="tapi">1 2 3 4 5 ... 51</span>
                            вперед
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
