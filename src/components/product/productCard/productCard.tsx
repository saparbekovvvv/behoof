import React from "react";
import storoke from "../../../assets/2.png";
import "./productCard.css";
import Headphone from "../../../assets/p4.png";
import Phone from "../../../assets/p.png";
import Radio from "../../../assets/p3.png";
import Laptop from "../../../assets/p2.png";

const ProductCard: React.FC = () => {
    return (
        <>
            <section id="Card">
                <div className="container">
                    <div className="pretitle">
                        <h1 className="title_text">Обзоры</h1>
                        <h1 className="title_text2">
                            к обзорам{" "}
                            <img className="storoke" src={storoke} alt="" />
                        </h1>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <img className="phon" src={Phone} alt="" />
                            <div className="text">
                                <h1 className="text2">
                                    Обзор устаревших смартфонов
                                </h1>
                                <p className="text3">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Rhoncus risus viverra enim nunc.
                                </p>
                                <h1 className="text4">
                                    Смотреть
                                    <img
                                        className="storoke"
                                        src={storoke}
                                        alt=""
                                    />
                                </h1>
                            </div>
                        </div>
                        <div className="card">
                            <img className="phon" src={Laptop} alt="" />
                            <div className="text">
                                <h1 className="text2">
                                    Обзор устаревших смартфонов
                                </h1>
                                <p className="text3">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Rhoncus risus viverra enim nunc.
                                </p>
                                <h1 className="text4">
                                    Смотреть
                                    <img
                                        className="storoke"
                                        src={storoke}
                                        alt=""
                                    />
                                </h1>
                            </div>
                        </div>
                        <div className="card">
                            <img className="phon" src={Radio} alt="" />
                            <div className="text">
                                <h1 className="text2">
                                    Обзор устаревших смартфонов
                                </h1>
                                <p className="text3">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Rhoncus risus viverra enim nunc.
                                </p>
                                <h1 className="text4">
                                    Смотреть
                                    <img
                                        className="storoke"
                                        src={storoke}
                                        alt=""
                                    />
                                </h1>
                            </div>
                        </div>
                        <div className="card">
                            <img className="phon" src={Headphone} alt="" />
                            <div className="text">
                                <h1 className="text2">
                                    Обзор устаревших смартфонов
                                </h1>
                                <p className="text3">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Rhoncus risus viverra enim nunc.
                                </p>
                                <h1 className="text4">
                                    Смотреть
                                    <img
                                        className="storoke"
                                        src={storoke}
                                        alt=""
                                    />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductCard;
