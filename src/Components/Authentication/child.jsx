import { useState } from "react"
import { Button, Ptag } from "../styled-componets/body"

import "./login.css"
import { ErrorMessage } from "./preChecks/error"
import { ForwardBtn } from "./preChecks/forward"


export const ChildType=(value)=>{
  const [dob,setdob]=useState({})
  const [DOB,setDOB]=useState("")


  const handleChange=(e)=>{
    let {id,value}=e.target;
    if(id=="day"){value=+value}
    setdob({...dob,[id]:value})
   console.log(dob)
    if(dob.month=="February"&&dob.year%4!==0&&dob.day>28){
      setDOB(false)
    }
    else if(dob.month=="February"&&dob.year%4==0&&dob.day<=29&&dob.day&&dob.year){
      setDOB(true)
    }
    else if((dob.month=="April"||dob.month=="June"||dob.month=="Sepetember"||dob.month=="November")&&dob.day>30)setDOB(false)
    else if((dob.month=="April"||dob.month=="June"||dob.month=="Sepetember"||dob.month=="November")&&dob.day<=30)setDOB(true)

    else if((dob.month!=="April"||dob.month!=="June"||dob.month!=="Sepetember"||dob.month!=="November"||dob.month=="February")&&dob.day<=31)setDOB(true)
   
  }

    return (
   <div>
        <p className="endBlack">
      What is your date of birth?
    </p>
    <Button Width={"100%"} Height={"30px"}   >
      <select name="" id="month" onChange={(event)=>handleChange(event)}>
          <option value="">Month</option>
        <option value="january">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>  </select>
          
          <select name="" id="day"  onChange={(event)=>handleChange(event)}>
              <option value="">Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5" >5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
          </select>
          
          
          <select name="" id="year"  onChange={(event)=>handleChange(event)}>
              <option value="">Year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
          </select>
    </Button>
   { DOB==true?<ForwardBtn value={value}/>:DOB==""?"":<ErrorMessage/> }

    <Ptag style={{marginTop: "50px"}}>
        Enter the class code</Ptag>

  
   </div>  )
}





