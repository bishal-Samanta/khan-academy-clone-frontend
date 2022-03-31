import { Route, Routes } from "react-router-dom"
import { Login } from "../Authentication/Login"
import { Signup } from "../Authentication/Signup"


import Navbar from "../Navbar/navbar"
export const Router=()=>{



    return (
        <div>
              <Navbar/>

            <Routes>
            <Route path="/login"   element={<Login/>}/>
            <Route path="/signup"   element={<Signup/>}/>

            </Routes>
        </div>
    )
}