import { Route, Routes } from "react-router-dom";
import Main from "../components/main/Main";

const PUBLIC = [
  { path: "/", element: <Main />, key: 1 },
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
