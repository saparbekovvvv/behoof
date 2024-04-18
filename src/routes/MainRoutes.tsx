import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Auth from "../../src/components/auth/Auth";
import Favorite from "../favorite/favorite";

const PUBLIC = [
    { path: "/", element: <Main />, key: 1 },
    { path: "/auth", element: <Auth />, key: 6 },
    { path: "./favorite", element: <Favorite />, key: 2 },
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
