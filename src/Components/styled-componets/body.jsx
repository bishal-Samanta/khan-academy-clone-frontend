import styled from'styled-components'
export const Body=styled.div`
   
background-color:rgb(17,123,227);
font-family:Lato, "Noto Sans", Helvetica, Corbel, sans-serif, Helvetica, Corbel, sans-serif;
height:${({Height})=>Height};
margin: 0;
padding:0;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`

export const Child=styled.div`
    width:${({Width})=>Width};
    height:${({Height})=>Height?Height:"white"};
    background-color:${({bgcolor})=>bgcolor};
color:${({Color})=>Color};
font-weight:${({weight})=>weight};
font-size:${({size})=>size};
margin:${({margin})=>margin};
line-height:15px;
@media screen and (max-width:768px){
   width:100% ;
   height:auto;
}
&>.end{
    text-align:left;
}
&>.blue{
    color:rgb(27,103,242);
}
&>.red{
    color:red;
    font-size:15px;
}
&>input{
    width:98%;
    height:30px;
    line-height:10px;

}

`
export const Main=styled.div`
    

width:75%;
height:75%;
display:flex;
 @media screen and (max-width:768px){
   display:block;
   width:100% ;
}

`


export const Button=styled.div`
    width:${({Width})=>Width};
    display:flex;
   text-align:center;
    padding:${({padding})=>padding};
    height:${({Height})=>Height};
    font-size:15px;
    font-weight:700;
    margin:auto auto 10px auto;
    line-height:normal;
    border-radius:5px;
    background-color:white;
border:${({border})=>border};

    &:hover{
        background-color:rgb(238,238,238);
        cursor:pointer
    }
    &>p{
        margin-left:50px;
       
    }
    &>svg{
        margin-left:30px
    }
`


export const Btn=styled.button`
    width:${({Width})=>Width};
    color:${({color})=>color?color:"rgb(33,36,44)"};
   
    height:${({Height})=>Height};
    font-size: 15px;

font-weight: 600;
&:hover{
    background-color:${({color})=>color=="rgb(24,101,242)"?color:"white"};
    color:${({color})=>color!=="rgb(24,101,242)"?color:"white"};
}
`

export const Ptag=styled.div`
font-size: 15px;

font-weight: 600;

line-height: 22.95px;
 color: rgb(24, 101, 242);
`
