import React from "react";
import styled from "styled-components";

const Container=styled.div`
width:20%;
min-height: 45%;
background-color: rgba(0, 0, 0, 0.5);
border-radius: 20px;
padding:20px;

`
const TitleUp=styled.div`
width:100%;
height: 70px;

display: flex;
justify-content: center;
align-items: center;
margin-bottom:50px;
`
const Title=styled.h2`
boxe-size:content-box;
color: lightgray;
:hover {
  -webkit-filter: drop-shadow(0 0 5px lightgray);
  filter: drop-shadow(0 0 5px lightgray);
}
`

const ContainerInput=styled.div`
width:100%;
min-height:70px;
`
const Label=styled.label`
font-size:20px;
color:lightgray;
`
const Input=styled.input`
width:90%;
height:30px;
font-size:16px;
border-radius: 10px;
background-color: rgba(0, 0, 0, 0.4);
border:none;
color:#fff;
padding:0 15px;
margin:15px 0;

`
const Botton=styled.button`
width:100%;
height:30px;
cursur:pointer;
border-radius: 10px;
background-color: rgba(0, 0, 0, 0.4);
color:#fff;
boder:none;
transition:1s;
:hover{
  transform:scale(1.2)
}
margin:10px 0;

`


const SingupForm = () => {
    return (

       <Container>
        <TitleUp>
          <Title>  SIGN UP </Title>
        </TitleUp>

        <ContainerInput>
        <Label>Name</Label>
        <Input type="text"/>
        <Label>UserName</Label>
        <Input type="text"/>
        <Label>Email</Label>
        <Input type="email"/>
        <Label>Password</Label>
        <Input type="password"/>
        </ContainerInput>
        <Botton> Sign Up</Botton>
      </Container> 
            
    );
  };
  
  export default SingupForm;