import React from 'react'
import styled from 'styled-components'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";

  const Info = styled.div`
  position: absolute;
  top:0;
  left:0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: black;
  opacity: 0.5; */
  /* color: white; */
  background-color: rgba(0,0,0,0.5);
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
  `
const Container = styled.div`
flex: 1;
min-width: 22vw;
height: 44vh;
display: flex;
background-color: aliceblue;
margin: 10px;
justify-content: center;
align-items: center;
position: relative;


&:hover ${Info} {
    opacity: 1;
}
`



const Image = styled.img`
height: 85%;
/* z-index: 2; */
`


const Icon = styled.div`
margin: 10px;
width: 50px;
height: 50px;
border-radius: 50px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
  return (
    <>
        <Container>

            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    </>
  )
}

export default Product