import React from "react";
import styled from "styled-components";
import  SingupForm from '../components/SingupForm';



const Container = styled.div`
width:100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url("https://static.vecteezy.com/ti/vecteur-libre/p3/4493236-ville-moderne-paysage-batiments-et-architecture-immobilier-silhouette-vector-background-illustration-in-line-simple-geometric-flat-style-vectoriel.jpg");
`
const signup = () => {
  return (
    <div>
       <Container>
       <SingupForm/>
       </Container>
    </div>
  );
};

export default signup;
