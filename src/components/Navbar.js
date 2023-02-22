import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from "@mui/material/Badge";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
  /* border-radius: 2px; */
  cursor: pointer;
`;

const Input = styled.input`
  align-items: center;
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{ color: "gray", fontsize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>SHOPPIE</Logo>
          </Center>
          <Right>
            <Menu>REGISTER</Menu>
            <Menu>SIGN IN</Menu>
            <Menu>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Menu>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
