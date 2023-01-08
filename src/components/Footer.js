import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
    padding: 30px ;
  gap: 10vw;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1vw;
`;

const SocialIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h3``;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  gap: 10px;
`;

const ListItem = styled.li`
  width: 40%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactItem = styled.div`
display: flex;
align-items: center;

`;

const Payments = styled.img`
width: 60%;`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>SHOPPIE</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
            Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} /> contact@abhi.dev
          </ContactItem>
          <Payments src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </>
  );
};

export default Footer;
