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
cursor: pointer;
&:hover{
    background-color: ${(props)=>props.type!=="filled" ? "black" : "white"} ;
    color: ${(props)=>props.type!=="filled" ? "white" :"black" } ;
    border: ${(props)=>props.type==="filled" && "2px solid black"};
    transition: all 0.5s ease;
}
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

const Product = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0px;
`

const ProductDetail = styled.div`
flex: 2;
display: flex;
`

const Image = styled.img`
width: 250px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;

`
const ProductName = styled.span``

const ProductId = styled.span`
`
const ProductColour = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: ${(props)=>props.bg};
` 

const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
gap: 20px;
`

const AmountContainer = styled.div`
display: flex;
align-items: center;

`

const Amount = styled.div`
margin: 5px;
font-size: 25px;
`

const Price = styled.div`
font-size: 30px;
font-weight: 300;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

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
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.freepnglogos.com/uploads/shoes-png/shoes-wasatch-running-3.png" />
                            <Details>
                                <ProductName><b>Product:</b> ROCKY SHOES</ProductName>
                                <ProductId><b>ID:</b> 987658765</ProductId>
                                <ProductColour bg={"black"} />
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                        <AmountContainer>
                        <Add/>
                            <Amount><b>3</b></Amount>
                            <Remove/>
                        </AmountContainer>

                        <Price>RS. 2000</Price>
                        </PriceDetail>
                    </Product>
                    
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.freepnglogos.com/uploads/shoes-png/shoes-wasatch-running-3.png" />
                            <Details>
                                <ProductName><b>Product:</b> ROCKY SHOES</ProductName>
                                <ProductId><b>ID:</b> 987658765</ProductId>
                                <ProductColour bg={"black"} />
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                        <AmountContainer>
                        <Add/>
                            <Amount><b>3</b></Amount>
                            <Remove/>
                        </AmountContainer>

                        <Price>RS. 2000</Price>
                        </PriceDetail>
                    </Product>
                    
                    <Hr />
                </Info>
           

                <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs. 76</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs. 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs. -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs. 87</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
            </Wrapper>
        </Container>
        <Footer/>
    </>
  )
}

export default Cart