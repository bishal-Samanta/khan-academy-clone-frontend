import axios from "axios";
import { useState } from "react"
import { Btn, Button,P, Ptag } from "../../styled-componets/body"


// name: { type: String, required: false },
//         email: {type: String , required: true },
//         password: {type: String , required: true },
//         userName: {type:String , required:false }



export const SignupForm=()=>{

    const payload = {
        name: "",
        email: "",
        password: "",
        userName: ""
    }

    const [data , setData] = useState(payload);




    const handelChange = (e) =>{
        // console.log(e.target.value)
        // console.log(e.target.name)
        const { name } = e.target;
        const value = e.target.value;

        if(name === "username"){
            setData({...data , [name] : value });
            return;
        }
        setData({...data , [name]: value });
        
        return;
    }

    const handelSubmit = () =>{
        
        axios.post("https://shielded-reaches-27262.herokuapp.com/signup", data)
        .then((res)=>{
            console.log(res.data)
            localStorage.setItem("userdata" , JSON.stringify(res.data));
            alert("Signup Successfully");
        })
        .catch((e)=>{
            console.log(e.response.data.errors[0].msg);
            if(e.response.data.errors[0].msg == "Email is already Registered"){
                window.location.href = "/login"
            }
            alert(e.response.data.errors[0].msg)
        })    

    }



    return (
        <div>
            <Button Width={"100%"} Height={"100%"}>
  <div>
  <p className="end">Your parent or guardian's email</p>
   <p className="small end">We’re excited to get you started, but we need to notify your parent or guardian about your account.</p>
        
        <input type="email" className="input" placeholder="example@gamil.com" name="email" id="email" onChange={(e)=> handelChange(e)} />
        
        
        <p className="end">Choose a username</p>
        <p className="small end ">Use letters and numbers only. For safety, don't use your real name.</p>
        <input  className="input" type="text" name="userName" id="username" onChange={(e)=> handelChange(e)} />
        <p className="end">Create a password</p>
        <p className="small end">Passwords should be at least 8 characters long and should contain a mixture of letters, numbers, and other characters.</p>
<input type="password" name="password" id="" className="input" onChange={(e)=> handelChange(e)} />          </div>  </Button>


<div className="flex">
    <Ptag className="color">Back</Ptag>
    <Btn Width={"8rem"} Height={"2.5rem"} color={""} onClick={handelSubmit}>Sign Up</Btn>
</div>
       
        </div>
    )
}