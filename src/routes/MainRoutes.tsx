import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Product from "../components/product/Product";

const PUBLIC = [
    { path: "/", element: <Main />, key: 1 },
    { path: "/product", element: <Product />, key: 3 },
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
