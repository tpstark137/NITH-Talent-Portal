import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import NotFound from "../components/common/NotFound";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
