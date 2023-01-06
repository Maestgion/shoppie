import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";


// Main container 

const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
background-color: orange;
position: relative;
overflow: hidden;

`
const Arrow = styled.div`
    background-color: #fff7f7;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction==="left" && "10px"};
    right: ${(props)=> props.direction==="right" && "10px"};
    margin: auto;
    z-index: 5;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
background-color: aliceblue;
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
background-color: aquamarine;
display: flex;
align-items: center;

`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;

`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
`

const Title = styled.h1`
    font-size: 50px;
`

const Desc = styled.p`
font-size: 30px;
font-weight: bold;


`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
`

const Slider = () => {
  return (
    <>
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImageContainer>
                    <Image/>
                </ImageContainer>
                <InfoContainer>
                  <Title>hbj</Title>
                  <Desc>vhb</Desc>
                  <Button>vgh</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
    
    </>
  )
}

export default Slider