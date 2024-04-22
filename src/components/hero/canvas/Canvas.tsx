import React from "react";
import "./canvas.css";
import google from "../../../assets/Store=Google Play, Color=Black, Language=Russian.png";
import apple from "../../../assets/Store=App Store, Color=Black, Language=Russian.png";
import iphone from "../../../assets/iPhone 14 Pro Space Black Mockup.png";

const Canvas: React.FC = () => {
  return (
    <section id="Canvas">
      <div className="container">
        <div className="canvas">
          <div className="canvas-content">
            <p>
              <span>Экономьте</span> свое время <br /> и получайте{" "}
              <span>максимум</span> <br /> от ежедневных покупок
            </p>
            <div className="canvas-img">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
          <div className="canvas-img-two">
            <img src={iphone} alt="" />
            <div className="canvas-iphone">
              <img src={iphone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Canvas;
