import React from 'react'
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
`

const Title = styled.h1`
text-align: center;
font-weight: 300;
`

const Top = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
border: ${(props)=>props.type==="filled" && "none"};
background-color: ${(props)=>props.type==="filled"? "black" : "transparent"};
color: ${(props)=>props.type==="filled" && "white"};
`

const TopTexts = styled.div`
`

const TopText = styled.span`
margin: 0px 10px;
text-decoration: underline;
cursor: pointer;

`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`

const Info = styled.div`
flex: 3;
`
const Summary = styled.div`
flex: 1;
`


const Cart = () => {
  return (
    <>
        <Navbar/>
        <Announcements/>
        <Container>
            <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(2)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    


                    

                </Info>
                <Summary>summary</Summary>
            </Bottom>
            </Wrapper>
        </Container>
        <Footer/>
    </>
  )
}

export default Cart