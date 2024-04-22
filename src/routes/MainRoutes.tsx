import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Differences from "../components/differences/Differences";
import Auth from "../../src/components/auth/Auth";
import Favorite from "../favorite/favorite";
import Products from "../components/products/Products";

const PUBLIC = [
  { path: "/", element: <Main />, key: 1 },
  { path: "/differences", element: <Differences />, key: 2 },

  { path: "/auth", element: <Auth />, key: 6 },
  { path: "/favorite", element: <Favorite />, key: 7 },

  { path: "/products", element: <Products />, key: 4 },
];
const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
