import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Differences from "../components/differences/Differences";

const PUBLIC = [
  { path: "/", element: <Main />, key: 1 },
  { path: "/differences", element: <Differences />, key: 2 },
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
