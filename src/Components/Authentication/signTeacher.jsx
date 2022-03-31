
import { Child } from "../styled-componets/body"




export const SignTeacher=()=>{


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
          <p>Help every student succeed with personalized practice. 100% free.</p>
          <p  className="height"><ul>
              <li>NEW! Khan for <span>Educators professional learning resources</span></li>
              <li>Find standards-aligned content</li>
              <li>Assign practice exercises, videos and articles</li>
              <li>
              Track student progress</li>
              <li>Join millions of teachers and students</li>
              </ul></p>
          <p  className="height">By logging into Khan Academy, you agree to our <a href="#">Terms of use</a> and <a  href="#"> Privacy Policy.</a></p>
        
          </div>
        </Child>
    )
}