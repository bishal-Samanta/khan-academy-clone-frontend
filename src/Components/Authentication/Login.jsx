import { Body, Button, Child, Main } from "../styled-componets/body"
import {Link} from "react-router-dom"
import "./login.css"
import { OAuth } from "./oAuth"
import { useState } from "react"
import axios from "axios"
export const Login=()=>{
  const payload = {
    password: "",
    email: ""
  }
  const [data, setData] = useState(payload);

  const handelSubmit = () =>{
    console.log(data);
    console.log("Test");
    //Request

    // axios.post("https://shielded-reaches-27262.herokuapp.com/signup", data)
    //     .then((res)=>{
    //         console.log(res.data)
    //         localStorage.setItem("userdata" , JSON.stringify(res.data));
    //         alert("Signup Successfully");
    //     })
    //     .catch((e)=>{
    //         console.log(e.response.data.errors[0].msg);
    //         if(e.response.data.errors[0].msg == "Email is already Registered"){
    //             window.location.href = "/login"
    //         }
    //         alert(e.response.data.errors[0].msg)
    //   })   

    axios.post("https://shielded-reaches-27262.herokuapp.com/login" , data)
    .then((res) =>{
      console.log(res.data);
      localStorage.setItem("userdata" , JSON.stringify(res.data));
      alert("Login Successfully");
    })
    .catch((err)=>{
      console.log(err.response.data);
      alert(err.response.data.errors[0].msg)
    })



  }

  const handelChange = (e) =>{
    const { value , name } = e.target;
    setData({...data , [name] : value });
    return;
  }


    return (
      <Body   Height={"60rem"}>

           <Main className={"main"}>
               <Child bgcolor={"rgb(10,42,102)"} Width={"50%"} Height={"48rem"} color={"white"} weight={"400"}size={"17px"}>
               <div style={{
                 width:"80%",
                 height:"auto",
                 margin:" 50px auto",
                 color:"white",
                 textAlign:"left"

               }}>
               <h1>Login</h1>
                 <p  className="height">Good to see you again!</p>
                 <p  className="height">By logging into Khan Academy, you agree to our <a href="#">Terms of use</a> and <a  href="#"> Privacy Policy.</a></p>
               </div>
               </Child>
               <Child bgcolor={"white"} Width={"50%"} Height={"48rem"} color={"black"} >

                 <Child Width={"75%"} Height={"85%"} margin={"10%"}>
              
                                     <OAuth/>
                              {/* --------------------form------------------- */}
                              <p className="end"  style={{fontSize:"13px"}}>* indicates a required field.</p>
                 <p className="end red">You closed the popup window before logging in. If that was a mistake, try logging in again.</p>
                 <p className="end"><label htmlFor="username">Email or username *</label></p>
                 <input type="text" name="email" id="username" onChange={(e) => handelChange(e)} />
                 <p className="end"><label htmlFor="password">Password *</label></p>
                 <input type="password" name="password" id="password" onChange={(e) => handelChange(e)} />
                 <h4 className="blue">Forgot Password</h4>
             <button  style={{
               width:"100%",
               height:"40px",
               backgroundColor:"rgb(27,103,242)",
               textAlign:"center",
              color:"white",
              border:"none",
              borderRadius:"5px",
              cursor: "pointer"
             }} onClick={() => handelSubmit()} >Log In</button>
                 <h4 className="blue"><Link to="/signup">Create an account</Link></h4>
                 </Child>



                 {/* text starts */}
               
     </Child>

           </Main>
      </Body>
    )
}