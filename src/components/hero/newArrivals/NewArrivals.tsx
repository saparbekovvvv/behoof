import React from "react";
import "./newArrivals.css";
import watches from "../../../assets/apple-watches.png";
import headphones from "../../../assets/2272131 1 (5).png";

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
      img: watches,
      pretitle: "Умные часы",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 4,
      img: watches,
      pretitle: "Смартфоны",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 5,
      img: watches,
      pretitle: "Планшеты",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 6,
      img: watches,
      pretitle: "Смартфоны",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 7,
      img: watches,
      pretitle: "Аксесуары",
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: "114 099 ₽",
    },
    {
      id: 8,
      img: watches,
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
            <div key={item.id} className="new-content">
              <img src={item.img} alt="" />
              <p>{item.pretitle}</p>
              <h1>{item.title}</h1>
              <h3>{item.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NewArrivals;
