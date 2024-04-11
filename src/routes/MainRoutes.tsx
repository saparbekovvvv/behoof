import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Products from "../components/products/Products";

const PUBLIC = [
  { path: "/", element: <Main />, key: 1 },
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
