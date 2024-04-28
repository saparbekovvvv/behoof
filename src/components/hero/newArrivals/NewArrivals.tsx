import React from "react";
import "./newArrivals.css";
import watches from "../../../assets/apple-watches.png";
import headphones from "../../../assets/headphone.png";
import ps4 from "../../../assets/ps4.png";
import iphone from "../../../assets/2272131 1.png";
import tablet from "../../../assets/2272131 1 (2).png";
import accessories from "../../../assets/2272131 1 (7).png";
import macbook from "../../../assets/macbook.png";

const NewArrivals: React.FC = () => {
  const Arrivals = [
    {
      id: 1,
      img: watches,
      pretitle: "Умные часы",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 2,
      img: headphones,
      pretitle: "Наушники",
      title: "Apple iPhone 13 Pro Max 256 ГБ серий",
      price: "114 099 ₽",
    },
    {
      id: 3,
      img: ps4,
      pretitle: "Умные часы",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 4,
      img: iphone,
      pretitle: "Смартфоны",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 5,
      img: tablet,
      pretitle: "Планшеты",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 6,
      img: iphone,
      pretitle: "Смартфоны",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 7,
      img: accessories,
      pretitle: "Аксесуары",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 8,
      img: macbook,
      pretitle: "Ноутбуки",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 9,
      img: watches,
      pretitle: "Портативные колонки ",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 10,
      img: watches,
      pretitle: "Смартфоны",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
  ];
  return (
    <section id="NewArrivals">
      <div className="container">
        <h1>Новинки</h1>
        <div className="newArrivals">
          {Arrivals.map((item) => (
            <article key={item.id} className="new-content">
              <img src={item.img} alt={item.pretitle} />
              <p>{item.pretitle}</p>
              <h2>{item.title}</h2>
              <h3>{item.price}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NewArrivals;
