import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
flex: 1;
margin: 15px;
height: 85vh;
position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: white;
font-size: 30px;
margin-bottom: 20px;
`

const Button = styled.button`
    background-color: white;
    color: gray;
    cursor: pointer;
    font-size: 15px;
    padding: 15px;
    font-weight: bold ;
    /* margin: 20px 0px; */
    border: none;
`
const CategoryItem = ({item}) => {
  return (
    <>
      <Link to={`/products/${item.cat}`}>
       <Container>
       <Image src ={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
       </Container>
       </Link>
    </>
  )
}

export default CategoryItem