import React from "react";
import "./auth.css";
import { FcGoogle } from "react-icons/fc";
const Auth: React.FC = () => {
    return (
        <div>
            <main>
                <div className="container">
                    <div className="register-form-container">
                        <div className="from-hero">
                            <h1 className="form-pretitle">Новый аккаунт</h1>
                            <h5 className="from-title">
                                Уже есть аккаунт? <span>Войти</span>
                            </h5>
                        </div>
                        <div className="from-first">
                            <div className="form-fields">
                                <div className="form-field">
                                    <input type="text" placeholder="Эл.почта" />
                                    <hr className="hr" />
                                </div>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        placeholder="Подвердите почту"
                                    />
                                    <hr className="hr" />
                                </div>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        placeholder="Придумайте пароль"
                                    />
                                    <hr className="hr" />
                                </div>

                                <div className="form-field">
                                    <input
                                        type="text"
                                        placeholder="Подвердите пароль"
                                    />
                                    <hr className="hr" />
                                </div>
                                <div className="form-buttons">
                                    <button className="button ">
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </div>
                            <div className="form-hr">
                                <hr className="hr1" />
                                <span>или</span>
                                <hr className="hr1" />
                            </div>
                            <div className="form-google">
                                <a href="#" className="google">
                                    <div className="form-google-icon">
                                        <FcGoogle />
                                    </div>
                                    <div className="form-google-text">
                                        Продолжить в Google
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Auth;
