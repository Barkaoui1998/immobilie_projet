import React from 'react'
import LoginForm from '../components/LoginForm'
import styled from 'styled-components'

const Container =styled.div`
width:100vw;
height:100vh;
background-color: gray;
display:flex;
justify-content:center;
align-items:center;
`

const Login = () => {
  return (
    <Container>
        <LoginForm/>
    </Container>

  )
}

export default Login