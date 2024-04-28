import React, { useState } from "react";
import "./products.css";
import img from "../../assets/iphone 13.png";
import heart from "../../assets/heart.svg";
import icon from "../../assets/export.png";
// import { IoStatsChartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import differences from "../../assets/differences.png";
import { BsArrowDownUp } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";

const Products: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: new Date().toLocaleString(),
      image: img,
      title: "Apple iPhone 13 Pro Max 256 ГБ серый",
      price: 78999,
      rating: Math.floor(Math.random() * 5) + 1,
      reviews: Math.floor(Math.random() * 1000),
      features: [
        "Dual Sim",
        "3G",
        "4G",
        "5G",
        "VoLTE",
        "Wi-Fi",
        "NFC",
        "6.1 inches, 1170 x 2532 px Display with Small Notch",
        "Bionic A15, Hexa Core, 3.22 GHz Processor",
        "12 MP + 12 MP Dual Rear & 12 MP Front Camera",
        "4 GB RAM, 128 GB inbuilt",
        "Memory Card Not Supported",
        "3240 mAh Battery with Fast Charging",
        "iOS v15",
      ],
    },
  ]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [batteryFilter, setBatteryFilter] = useState<string[]>([]);
  const [cameraFilter, setCameraFilter] = useState<string[]>([]);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };

  const handleBatteryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (batteryFilter.includes(value)) {
      setBatteryFilter(batteryFilter.filter((item) => item !== value));
    } else {
      setBatteryFilter([...batteryFilter, value]);
    }
  };

  const handleCameraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (cameraFilter.includes(value)) {
      setCameraFilter(cameraFilter.filter((item) => item !== value));
    } else {
      setCameraFilter([...cameraFilter, value]);
    }
  };

  const filteredProducts = products.filter((product) => {
    const price = product.price;
    const meetsPriceCriteria =
      (minPrice === "" || price >= parseFloat(minPrice)) &&
      (maxPrice === "" || price <= parseFloat(maxPrice));
    const meetsBatteryCriteria =
      batteryFilter.length === 0 ||
      batteryFilter.some((filter) => product.features.includes(filter));
    const meetsCameraCriteria =
      cameraFilter.length === 0 ||
      cameraFilter.some((filter) => product.features.includes(filter));
    return meetsPriceCriteria && meetsBatteryCriteria && meetsCameraCriteria;
  });
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
        <div className="sortir-title">
          <span className="spans-title">
            <BsArrowDownUp />
            Сортировка
          </span>
        </div>
        <div className="section">
          <div className="section-title">Качественные характеристики</div>
          <div className="flex-sect">
            <div className="qqq">
              <h1 className="sena">Цена</h1>
              <div className="price-input">
                <input
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  placeholder="От"
                  type="number"
                  id="min-price"
                  name="min-price"
                />
                <input
                  placeholder="До"
                  value={maxPrice}
                  type="number"
                  id="max-price"
                  name="max-price"
                  onChange={handleMaxPriceChange}
                />
              </div>
              <div className="price-range">
                <h1 className="depozit-title">Диапозон</h1>
                <div>
                  <input type="radio" id="range-1" name="price-range" />
                  <label htmlFor="range-1">0 - 10 000 ₽</label>
                </div>
                <div>
                  <input type="radio" id="range-1" name="price-range" />
                  <label htmlFor="range-1">10 000 - 20 000 ₽</label>
                </div>
                <div>
                  <input type="radio" id="range-1" name="price-range" />
                  <label htmlFor="range-1">20 000 - 30 000 ₽</label>
                </div>
                <div>
                  <input type="radio" id="range-1" name="price-range" />
                  <label htmlFor="range-1">+ 30 000 ₽</label>
                </div>
              </div>
            </div>
            <div className="check">
              <div className="checkbox-group">
                <h1 className="bater-title">Батарея</h1>
                <div className="battery-content">
                  <input
                    value="battery1"
                    onChange={handleBatteryChange}
                    type="checkbox"
                    id="battery-1"
                    name="battery"
                  />
                  <label htmlFor="battery-1">Text label</label>
                </div>
                <div className="battery-content">
                  <input type="checkbox" id="battery-1" name="battery" />
                  <label htmlFor="battery-1">Text label</label>
                </div>
                <div className="battery-content">
                  <input type="checkbox" id="battery-1" name="battery" />
                  <label htmlFor="battery-1">Text label</label>
                </div>
                <div className="battery-content">
                  <input type="checkbox" id="battery-1" name="battery" />
                  <label htmlFor="battery-1">Text label</label>
                </div>
                <div className="battery-content">
                  <input type="checkbox" id="battery-1" name="battery" />
                  <label htmlFor="battery-1">Text label</label>
                </div>
                <div className="battery-content">
                  <input type="checkbox" id="battery-1" name="battery" />
                  <label htmlFor="battery-1">Text label</label>
                </div>
              </div>
              <div className="checkbox-group">
                <h1 className="kamer-title">Камера</h1>
                <div className="camera-content">
                  <input
                    value="camera1"
                    onChange={handleCameraChange}
                    type="checkbox"
                    id="camera-1"
                    name="camera"
                  />
                  <label htmlFor="camera-1">Text label</label>
                </div>
                <div className="camera-content">
                  <input type="checkbox" id="camera-1" name="camera" />
                  <label htmlFor="camera-1">Text label</label>
                </div>
                <div className="camera-content">
                  <input type="checkbox" id="camera-1" name="camera" />
                  <label htmlFor="camera-1">Text label</label>
                </div>
                <div className="camera-content">
                  <input type="checkbox" id="camera-1" name="camera" />
                  <label htmlFor="camera-1">Text label</label>
                </div>
                <div className="camera-content">
                  <input type="checkbox" id="camera-1" name="camera" />
                  <label htmlFor="camera-1">Text label</label>
                </div>
                <div className="camera-content">
                  <input type="checkbox" id="camera-1" name="camera" />
                  <label htmlFor="camera-1">Text label</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="groupOfProducts_content_objects_object"
          >
            <div className="groupOfProducts_content_objects_object_info_buttons1">
              <h1 className="groupOfProducts_content_objects_object_info_advantage-name1">
                {product.title}
              </h1>
              <h1 className="groupOfProducts_content_objects_object_info_advantage-price1">
                {product.price} ₽
              </h1>
              <div>
                <Link to="/favorite">
                  <img src={heart} alt="" />
                </Link>
                <Link
                  to={"/differences"}
                  className="groupOfProducts_content_objects_object_info_button"
                >
                  <img src={differences} alt="" />
                </Link>
              </div>
            </div>
            <img
              src={product.image}
              alt=""
              className="groupOfProducts_content_objects_object-img"
            />
            <div className="groupOfProducts_content_objects_object_info">
              <div className="groupOfProducts_content_objects_object_info_buttons">
                <h1 className="groupOfProducts_content_objects_object_info_advantage-name1">
                  Apple iPhone 13 Pro Max 256 ГБ серый
                </h1>
                <h1 className="groupOfProducts_content_objects_object_info_advantage-price1">
                  <span className="spam">
                    <RiArrowDownSFill />
                    13% 78 999 ₽
                  </span>
                </h1>
                <div className="Type">
                  <h1 className="text">4.4 Оценка экспертов </h1>
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
                <div className="ccc">
                  <Link to="/favorite">
                    <img src={heart} alt="" />
                  </Link>

                  <Link
                    to={"/differences"}
                    className="groupOfProducts_content_objects_object_info_button"
                  >
                    <img src={differences} alt="" />
                  </Link>
                </div>
              </div>
              <div className="groupOfProducts_content_objects_object_info_advantage">
                <div className="groupOfProducts_content_objects_object_info_advantage_title">
                  <h1 className="groupOfProducts_content_objects_object_info_advantage-name">
                    Apple iPhone 13 Pro Max 256 ГБ серый
                  </h1>
                  <div className="groupOfProducts_content_objects_object_info_advantage-price">
                    <span className="spam">
                      <RiArrowDownSFill /> 13 %{" "}
                    </span>
                    78 999 ₽
                  </div>
                </div>
                <div className="groupOfProducts_content_objects_object_info_advantage_info">
                  <div className="groupOfProducts_content_objects_object_info_advantage_info_block1">
                    <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                      ✓ Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC
                    </h1>
                    <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                      ✓ 6.1 inches, 1170 x 2532 px Display with Small Notch
                    </h1>
                    <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                      ✓ Bionic A15, Hexa Core, 3.22 GHz Processor
                    </h1>
                    <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                      ✓ 12 MP + 12 MP Dual Rear & 12 MP Front Camera
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
                      ✓ 3240 mAh Battery with Fast Charging
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
                  <span className="bate-title">Батарея</span>
                  <div className="phone_info_lines">
                    <div className="phone_info_line"></div>
                    <div className="phone_info_line"></div>
                    <div className="phone_info_line phone_info_line_empty"></div>
                    <div className="phone_info_line phone_info_line_empty"></div>
                    <div className="phone_info_line phone_info_line_empty"></div>
                  </div>
                </div>
                <div className="phone_info_info">
                  <span className="bate-title">Дисплей</span>
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
              <NavLink to="/product">
                <button className="groupOfProducts_content_objects_object_characteristics_button">
                  Перейти к товару
                </button>
              </NavLink>
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
