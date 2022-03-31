
import { Child } from "../styled-componets/body"



export const SignParent=()=>{



    return(
        <Child bgcolor={"rgb(10,42,102)"} Width={"50%"} Height={"28rem"} color={"white"} weight={"400"}size={"17px"}>
        <div style={{
          width:"80%",
          height:"auto",
          margin:" 50px auto",
          color:"white",
          textAlign:"left"

        }}>
        <h1>Sign up</h1>
        <p   className="height">First, create your parent account.</p>
          <p  className="height">After that, we'll take you through creating an account for your child.</p>
          <p   className="height">Join Khan Academy to get personalized help with what you’re studying or to learn something completely new. We’ll save all of your progress.</p>
          <p   className="height">By logging into Khan Academy, you agree to our <a href="#">Terms of use</a> and <a  href="#"> Privacy Policy.</a></p>
        
          </div>
        </Child>
    )
}