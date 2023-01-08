import React from 'react'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import styled from "styled-components"

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
`

const  Filter = styled.div`
display: flex;
gap: 10px;
align-content: center;

`
const  FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div``

const FilterSize = styled.select`
padding: 5px;
`

const FIlterSizeOptions = styled.option``

const CartContainer = styled.div``

const QuantityContainer = styled.div``

const Quantity = styled.option``

const Button = styled.button``

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
                        <FilterColor></FilterColor>
                      
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                            <FIlterSizeOptions></FIlterSizeOptions>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <CartContainer>
                    <QuantityContainer>
                        <Quantity></Quantity>
                    </QuantityContainer>
                    <Button>

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