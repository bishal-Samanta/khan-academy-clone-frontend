import { Route , Routes } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";


const AllRoutes = () =>{
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={"Login"} />
                <Route path="/signup" element={"Signup"} />
            </Routes>       
        </>
    )
}

export default AllRoutes;