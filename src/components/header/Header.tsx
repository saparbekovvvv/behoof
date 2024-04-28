import React, { useEffect, useState } from "react";
import logo from "../../assets/path0.png";
import userlogo from "../../assets/user.png";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Header: React.FC = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [isDropdown, setIsDropdown] = useState(false);
  const [profileImage, setProfileImage] = useState(userlogo);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setProfileImage(currentUser.photoURL || profileImage);
      } else {
        setProfileImage(profileImage);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleMenuLogOut = () => {
    signOut(auth).then(() => {
      console.log("User logged out");
      setUser(null);
    });
  };

  const data = {
    categories: [
      { id: "1", name: "Смартфоны" },
      { id: "2", name: "Планшеты" },
      { id: "3", name: "Умные часы" },
      { id: "4", name: "Игровые приставки" },
      { id: "5", name: "Наушники" },
      { id: "6", name: "Портативные колонки" },
      { id: "7", name: "Мониторы" },
      { id: "8", name: "Принтеры и сканеры" },
      { id: "9", name: "Планшеты и электронные книги" },
      { id: "10", name: "Корпуса и блоки питания" },
      { id: "11", name: "Аксессуары" },
    ],
  };

  const toggleDropdown = () => {
    setIsDropdown((prev) => !prev);
  };

  return (
    <header id="Header" className="bg-black">
      <div className="container">
        <div className="header">
          <div className="header-content">
            <img className="logo" src={logo} alt="Logo" />
            <NavLink to="/">Behoof</NavLink>
            <p>
              Лучшие цены <br /> в интернет-магазинах
            </p>
          </div>
          <div className="catalog">
            <button onClick={toggleDropdown}>Каталог товаров</button>
            <div
              className={isDropdown ? "dropdown-menu active" : "dropdown-menu"}
            >
              <div className="dropdown-Content">
                <h1>Каталог товаров</h1>
                <div className="dropdown-list focus">
                  <ul>
                    {data.categories.map((category) => (
                      <li key={category.id}>{category.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <input type="text" placeholder="Поиск товаров" />

            <div className="nav">
              <NavLink to="/favorite">
                <CiHeart />
              </NavLink>
              <NavLink to="/product">
                <IoStatsChartOutline />
              </NavLink>
              {user ? (
                <div className="logout">
                  <img
                    onClick={handleMenuLogOut}
                    src={profileImage}
                    style={{
                      width: "50px",
                      borderRadius: "50%",
                    }}
                    alt="User"
                  />
                </div>
              ) : (
                <NavLink to="/auth">
                  <img
                    src={userlogo}
                    style={{
                      borderRadius: "50%",
                    }}
                    alt="User"
                  />
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
