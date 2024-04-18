import React from "react";
import "./favorite.css";
import { IoHeartDislikeOutline } from "react-icons/io5";
const Favorite: React.FC = () => {
    return (
        <div>
            <div className="wrap">
                <div className="container">
                    <div className=" favorite-container">
                        <div className="favorite-icon">
                            <IoHeartDislikeOutline />
                        </div>
                        <div className="favorite-info">
                            <h2 className="favorite-title">
                                На данный момент <br /> нет избранных товаров
                            </h2>
                        </div>
                        {/* <div className="favorite-btn">
                            <button className="btn">Зарегистрироваться</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Favorite;
