import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20%;
  height: 45%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 20px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  color: lightgray;
  :hover {
    -webkit-filter: drop-shadow(0 0 5px lightgray);
    filter: drop-shadow(0 0 5px lightgray);
  }
`;

const InputContainer = styled.div`
  width: 100%;
  min-height: 200px;
`;

const Label = styled.label`
  color: lightgray;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;
const Input = styled.input`
  width: 93%;
  height: 50px;
  border: none;
  margin: 20px 0px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 20px;
  padding: 0 15px;
`;

const Button = styled.button`
  margin: 20px 0;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: lightgrey;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  transition: 1s ease;

  :hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const SignupContainer = styled.div`
  width: 100%;
  height: 20px;
  direction: rtl;
`;

const Signup = styled.h3`
  cursor: pointer;
  color: gray;
  margin-right: 5px;
`;

const LoginForm = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>SIGN IN</Title>
      </TitleContainer>

      <InputContainer>
        <Label>Email : </Label>
        <Input type="email" />
        <Label>Password : </Label>
        <Input type="password" />
      </InputContainer>
      <Button>SIGN IN</Button>
      <SignupContainer>
        <Signup> SIGN UP</Signup>
      </SignupContainer>
    </Container>
  );
};

export default LoginForm;
