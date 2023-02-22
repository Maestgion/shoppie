import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";
import { sliderItems } from '../assets/data/data';


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
transition: all 1.5s ease;
transform: translateX(${(props)=>props.slideIndex* -100}vw);
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
/* background-color: aquamarine; */
display: flex;
align-items: center;

`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 50px; */

`
const Image = styled.img`
    height: 80%;
    
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px 80px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: bold;
letter-spacing: 4px;


`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        color: white;
        background-color: black;
    }
`


const Slider = () => {

    const [slideIndex, updateSlideIndex] = useState(0);

    const handleSlide= (direction)=>{
        if(direction==="left")
        {
            updateSlideIndex(slideIndex>0?slideIndex-1 : 2)
        }
        else
        {
            updateSlideIndex(slideIndex<2 ? slideIndex + 1:0)
        }
    }

  return (
    <>
    <Container>
        <Arrow direction="left" onClick={()=>handleSlide("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
                    <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
                
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleSlide("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
    
    </>
  )
}

export default Slider