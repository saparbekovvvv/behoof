import React from "react";
import { AiOutlineExclamation } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import "./res.css";
import { NavLink } from "react-router-dom";

const Res: React.FC = () => {
  return (
    <div className="heber">
      <div className="container">
        <div className="content__knopka">
          <div className="content__1">
            <h1>
              <AiOutlineExclamation />
            </h1>
            <h2>Сообщение об ошибке</h2>
            <h2>
              <AiOutlineClose />
            </h2>
          </div>
          <div className="content__2">
            <h1>
              <AiOutlineCheck />
            </h1>
            <h2>Сообщение об успехе</h2>
            <h2>
              <AiOutlineClose />
            </h2>
          </div>
        </div>

        <div className="hero">
          <div className="content">
            <h1>Упс...</h1>
            <h3>Страница не найдена</h3>
            <p>
              Тут что то упало и это не страшно! <br /> Но мы все сохранили ;
            </p>
            <NavLink to="/">
              <button className="knopka">Перейти на главную</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Res;
