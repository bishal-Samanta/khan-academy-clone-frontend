import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import { Courses } from "../Profile/course/Course";
import { Login } from "../Signup-login/Login";
import { Signup } from "../Signup-login/Signup";
import { Profile } from "../Profile/profile/Profile";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
