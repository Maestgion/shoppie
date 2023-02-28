import React, { useState } from 'react'
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout"


const KEY = process.env.STRIPE_PUBLIC_KEY

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

  const cart = useSelector(state=>state.cart)
  const [stripeToken, setStripeToken] = useState(null)

  const onToken = (token)=>{
    setStripeToken(token)
  }

  console.log(stripeToken);

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
                    {
                      cart.products.map((product)=>
                      (
                        <Product>
                        <ProductDetail>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Product:</b>{product.title}</ProductName>
                                <ProductId><b>ID:</b> {product._id}</ProductId>
                                <ProductColour bg={product.color} />
                                <ProductSize><b>Size:</b> {product.size}</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                        <AmountContainer>
                        <Add/>
                            <Amount><b>{product.quantity}</b></Amount>
                            <Remove/>
                        </AmountContainer>

                        <Price>{product.price*product.quantity}</Price>
                        </PriceDetail>
                    </Product>
                      ))
                    }
                    
                    <Hr />
             
                </Info>
           

                <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs. {cart.total}</SummaryItemPrice>
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
              <SummaryItemPrice>Rs. {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="SHOPPIE"
              image="https://cdn.dribbble.com/users/230124/screenshots/15645740/media/5712571f79a059e26b5e4dd286598452.jpg?compress=1&resize=400x300"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
                </Summary>
            </Bottom>
            </Wrapper>
        </Container>
        <Footer/>
    </>
  )
}

export default Cart