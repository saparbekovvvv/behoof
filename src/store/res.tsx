import React from "react";
import "../store/res.css";
import { AiOutlineExclamation } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

const Res: React.FC = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1>Упс...</h1>
          <h3>Страница не найдена</h3>
          <p>
            Тут что то упало и это не страшно! <br /> Но мы все сохранили ;
          </p>
          <button>Перейти на главную</button>
        </div>
        <div className="content__knopka">
          <div className="content__1">
            <AiOutlineExclamation />
            <h5>Сообщение об ошибке</h5>
            <AiOutlineClose />
          </div>
          <div className="content__2">
            <AiOutlineCheck />
            <h5>Сообщение об успехе</h5>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Res;
