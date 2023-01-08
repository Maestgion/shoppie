import React from 'react'
import styled from "styled-components"
import {
   Send
  } from "@mui/icons-material";

const Container = styled.div`
padding: 20px;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fcf5f5;
gap: 20px;
`
const Title = styled.h1`
font-size: 8vh;
`
const Desc = styled.div`
font-size: 25px;
font-weight: 300;
`

const InfoContainer = styled.div`
width: 50%;
height: 5vh;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid lightgray;
`
const Input = styled.input`
flex: 7;
border: none;
padding-left: 20px;
outline: none;

`
const Button = styled.button`
flex: 1;
background-color: teal;
border: none;
color: white;
cursor: pointer;
height: 100%;

`

const Newsletter = () => {
  return (
    <>
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your 
                favourite products</Desc>
            <InfoContainer>
                <Input placeholder='Enter your email please' />
                <Button>
                    <Send/>
                </Button>
            </InfoContainer>

        </Container>
    </>
  )
}

export default Newsletter