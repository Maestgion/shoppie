import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { login } from '../redux/apiCalls';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
background-size: cover;
`
const Wrapper = styled.div`
background-color: white;
padding: 20px;
width: 25%;
`
const Title = styled.h1`
font-size: 25px;
font-weight: 400;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
padding: 10px;
min-width: 40%;
margin: 10px 0px;
flex: 1;
`

const Button = styled.button`
width: 40%;
border: none;
background-color: teal;
color: white;
padding: 10px;
margin: 10px 0px;
cursor: pointer;
&:disabled {
    color: green;
    cursor: not-allowed;
  }
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e)=>{
    e.preventDefault()
    login(dispatch, {username, password})
  }

  return (
    <>
         <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
         <Form>
         <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
          <Input placeholder="password" type="password"
          onChange={(e)=>setPassword(e.target.value)}
          />
        
          <Button onClick={handleSubmit} >LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
         </Form>

        </Wrapper>
      </Container>
    </>
  )
}

export default Login