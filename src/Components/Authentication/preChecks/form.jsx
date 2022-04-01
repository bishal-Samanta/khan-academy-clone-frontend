import { Btn, Button,P, Ptag } from "../../styled-componets/body"




export const SignupForm=()=>{


    return (
        <div>
            <Button Width={"100%"} Height={"100%"}>
  <div>
  <p className="end">Your parent or guardian's email</p>
   <p className="small end">We’re excited to get you started, but we need to notify your parent or guardian about your account.</p>
        
        <input type="email" className="input" placeholder="example@gamil.com" id="email" />
        
        
        <p className="end">Choose a username</p>
        <p className="small end ">Use letters and numbers only. For safety, don't use your real name.</p>
        <input  className="input" type="text" name="" id="username" />
        <p className="end">Create a password</p>
        <p className="small end">Passwords should be at least 8 characters long and should contain a mixture of letters, numbers, and other characters.</p>
<input type="password" name="" id="" className="input" />          </div>  </Button>


<div className="flex">
    <Ptag className="color">Back</Ptag>
    <Btn Width={"8rem"} Height={"2.5rem"} color={""}>Sign Up</Btn>
</div>
       
        </div>
    )
}