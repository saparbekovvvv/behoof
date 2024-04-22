import React from "react";
import "./auth.css";
const Auth: React.FC = () => {
    return (
        <div>
            <main>
                <div className="container">
                    <div className="register-form-container">
                        <h1 className="form-title">Регистрация</h1>
                        <div className="form-fields">
                            <div className="form-field">
                                <input type="text" placeholder="Имя" />
                            </div>
                            <div className="form-field">
                                <input type="text" placeholder="Почта" />
                            </div>
                            <div className="form-field">
                                <input type="text" placeholder="Пароль" />
                            </div>
                            <div className="form-field">
                                <input
                                    type="text"
                                    placeholder="Подвердить пароль"
                                />
                            </div>
                        </div>
                        <div className="form-buttons">
                            <button className="button ">Регистрация</button>
                            <div className="divider">или</div>
                            <a href="#" className="button button-google">
                                Google
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Auth;
