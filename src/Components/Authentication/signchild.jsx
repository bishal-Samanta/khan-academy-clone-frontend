

import { Child } from "../styled-componets/body"
export const SignChild=()=>{

    return(
        <Child bgcolor={"rgb(10,42,102)"} Width={"50%"} Height={"100%"} color={"white"} weight={"400"}size={"17px"}>
        <div style={{
          width:"80%",
          height:"auto",
          margin:" 50px auto",
          color:"white",
          textAlign:"left"

        }}>
        <h1>Sign up</h1>
          <p className="height">A world class education for anyone, anywhere. 100% free.</p>
          <p  className="height">Join Khan Academy to get personalized help with what you’re studying or to learn something completely new. We’ll save all of your progress.</p>
          <p   className="height">By logging into Khan Academy, you agree to our <a href="#">Terms of use</a> and <a  href="#"> Privacy Policy.</a></p>
        
          </div>
        </Child>
    )
}