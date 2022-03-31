import { Route , Routes } from "react-router-dom";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import { Login } from "../Signup-login/Login";
import { Signup } from "../Signup-login/Signup";



const AllRoutes = () =>{
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={ < Login/> } />
                <Route path="/signup" element={ < Signup/> } />
            </Routes>  
            < Footer/>
            
        </>
    )
}

export default AllRoutes;