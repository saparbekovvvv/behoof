import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Product from "../components/product/Product";
import Differences from "../components/differences/Differences";
import Favorite from "../favorite/favorite";
import Auth from "../components/auth/Auth";
import Products from "../components/products/Products";

const PUBLIC = [
    { path: "/", element: <Main />, key: 1 },
    { path: "/product", element: <Product />, key: 3 },

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
