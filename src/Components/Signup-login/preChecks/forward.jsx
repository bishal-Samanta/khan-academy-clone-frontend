import { Btn, Button } from "../../styled-componets/body"


export const ForwardBtn=({value})=>{
    return(
    <Button style={{
        height:"3rem",
        width:"18rem",
        margin:"auto"
    }}>
         <Btn onClick={()=>{value.value()}} Width={"18rem"} Height={"3rem"}  border={"1px solid rgb(81,83,90)"} color={"rgb(81,83,90)"}>Signup by choosing username</Btn>
  
    </Button>
        )
}