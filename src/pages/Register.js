import React from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
background-size: cover;
`
const Wrapper = styled.div`
background-color: white;
padding: 20px;
width: 40%;
`
const Title = styled.h1`
font-size: 25px;
font-weight: 400;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = styled.input`
padding: 10px;
min-width: 40%;
margin: 20px 10px 0px 0px;
flex: 1;
`

const Agreement = styled.p`
margin: 20px 0px;
font-size: 12px;
`
const Button = styled.button`
width: 40%;
border: none;
background-color: teal;
color: white;
padding: 15px 20px;
cursor: pointer;
&:hover{
    background-color: white;
    color: teal;
    border: 1px solid teal;
    transition: all 0.5s ease;
}
`

const Register = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
         <Form>
         <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
         </Form>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
