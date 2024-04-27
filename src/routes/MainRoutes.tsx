import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
<<<<<<< HEAD
import Differences from "../components/differences/Differences";
import Auth from "../../src/components/auth/Auth";
import Favorite from "../favorite/favorite";
=======
import Product from "../components/product/Product";
import Differences from "../components/differences/Differences";
import Favorite from "../favorite/favorite";
import Auth from "../components/auth/Auth";
>>>>>>> 7e0de1e203051d470d1e84f265a9a2f21b0ae4e6
import Products from "../components/products/Products";

const PUBLIC = [
    { path: "/", element: <Main />, key: 1 },
<<<<<<< HEAD
    { path: "/differences", element: <Differences />, key: 2 },

    { path: "/", element: <Main />, key: 1 },
    { path: "/auth", element: <Auth />, key: 6 },
    { path: "/favorite", element: <Favorite />, key: 7 },
    { path: "/", element: <Main />, key: 1 },
=======
    { path: "/product", element: <Product />, key: 3 },

    { path: "/differences", element: <Differences />, key: 2 },

    { path: "/auth", element: <Auth />, key: 6 },
    { path: "/favorite", element: <Favorite />, key: 7 },

>>>>>>> 7e0de1e203051d470d1e84f265a9a2f21b0ae4e6
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
