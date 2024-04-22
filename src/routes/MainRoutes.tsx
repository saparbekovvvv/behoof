import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
<<<<<<< HEAD
import Auth from "../../src/components/auth/Auth";
import Favorite from "../favorite/favorite";

const PUBLIC = [
    { path: "/", element: <Main />, key: 1 },
    { path: "/auth", element: <Auth />, key: 6 },
    { path: "/favorite", element: <Favorite />, key: 7 },
=======
import Products from "../components/products/Products";

const PUBLIC = [
  { path: "/", element: <Main />, key: 1 },
  { path: "/products", element: <Products />, key: 4 },
>>>>>>> 6de694871a54639ea294f962efc94591b6cc1dda
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
