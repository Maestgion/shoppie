import React from 'react'
import styled from 'styled-components'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";

const Container = styled.div`
flex: 1;
min-width: 22vw;
height: 44vh;
display: flex;
background-color: aliceblue;
margin: 10px;
justify-content: center;
align-items: center;
`

const Circle = styled.div``

const Image = styled.img`
height: 85%;
`

const Info = styled.div``

const Icon = styled.div``

const Product = ({item}) => {
  return (
    <>
        <Container>
            <Circle />

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