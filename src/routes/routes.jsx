import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/home" element={<MainPage />} />
    <Route path="*" element={<Navigate to="/home" />} />
  </Routes>
);

export default RoutesMain;
