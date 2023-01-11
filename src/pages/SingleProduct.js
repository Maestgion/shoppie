import React from 'react'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import styled from "styled-components"
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
gap: 50px;
`

const ImageContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 75vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 20px;
`

const Title = styled.h1`
font-weight: 300;
`

const Desc = styled.p`
font-weight:200;
text-align: justify;
`

const Price = styled.span`
font-weight: 200;
font-size: 5vh;
`
const FilterContainer = styled.div`
display: flex;
width: 50%;
justify-content: space-between;
align-items: center;
`

const  Filter = styled.div`
display: flex;
gap: 10px;
align-items: center;
`
const  FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=>props.bg};
`

const FilterSize = styled.select`
padding: 5px;
`

const FilterSizeOptions = styled.option``

const CartContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 0px;
`

const QuantityContainer = styled.div`
display: flex;
align-items: center;
gap: 5px;
`

const Quantity = styled.option`
border: 1px solid teal;
border-radius: 10px;
width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
background-color: transparent;
border: 3px solid teal;
padding: 10px;
`

const SingleProduct = () => {
  return (
    <>
    <Navbar/>
    <Announcements/>
    <Container>
        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tempore fugiat suscipit architecto nulla reprehenderit. Culpa consequatur laborum, sequi dignissimos dolorum nesciunt rem quibusdam eligendi incidunt pariatur corporis! Dignissimos, sequi?
                </Desc>
                <Price>Rs. 2,000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor bg={"black"} />
                        <FilterColor bg={"blue"} />
                        <FilterColor bg={"green"} />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                            <FilterSizeOptions>XS</FilterSizeOptions>
                            <FilterSizeOptions>S</FilterSizeOptions>
                            <FilterSizeOptions>M</FilterSizeOptions>
                            <FilterSizeOptions>L</FilterSizeOptions>
                            <FilterSizeOptions>XL</FilterSizeOptions>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <CartContainer>
                    <QuantityContainer>
                        <Remove/>
                        <Quantity>1</Quantity>
                        <Add/>
                    </QuantityContainer>
                    <Button>
                    ADD TO CART
                    </Button>
                </CartContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default SingleProduct