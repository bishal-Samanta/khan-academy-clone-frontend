
import { Body, Btn, Button, Child, Main, Ptag } from "../styled-componets/body"
import {Link} from "react-router-dom"
import "./login.css"
import { useState } from "react"
import { ChildType } from "./child"
import { OAuth } from "./oAuth"
import { SignChild } from "./signchild"
import { SignTeacher } from "./signTeacher"
import { SignParent } from "./signParent"

export const Signup=()=>{

const [type,setType]=useState("learner")

    return (
        <Body  Height={"40rem"}>

        <Main className={"main"}>
          {type=="learner"?<SignChild/>:type=="teacher"?<SignTeacher/>:<SignParent/>}
            <Child bgcolor={"white"} Width={"50%"} Height={"28rem"} color={"black"} >

            <Child Width={"75%"} Height={"75%"} margin={"50px auto"}>
                <p className="endBlack height">Join Khan Academy as a </p>
                <Button Width={"100%"} Height={"30px"} color={"rgb(24,101,242)"}>
                   <Btn onClick={()=>{setType("learner")}} className="butt" width={"33.3%"} Height={"30px"} color={"rgb(24,101,242)"}>Learner</Btn>
                   <Btn onClick={()=>{setType("teacher")}} className="butt"  width={"33.3%"} Height={"30px"} color={"rgb(24,101,242)"}>Teacher</Btn>
                   <Btn onClick={()=>{setType("parent")}} className="butt"  width={"33.3%"} Height={"30px"} color={"rgb(24,101,242)"}>Parent</Btn>
                </Button>

                 {type=="learner"?<ChildType/>:<OAuth/>}




                <Ptag>Already have an account?</Ptag>
            </Child>
            
  </Child>

        </Main>
   </Body>
    )
}