import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  margin-right: 20px;
  font-size: 20px;
  font-weight: 700;
`;
const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
  cursor: pointer;
`;
const Options = styled.option`
border-radius: 0px;
padding-bottom: 2px;
`;

const AllProducts = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2])
  return (
    <>
      <Navbar />
      <Announcements />
      <Container>
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Options disabled selected>Color</Options>
              <Options>white</Options>
              <Options>black</Options>
              <Options>green</Options>
              <Options>red</Options>
              <Options>blue</Options>
              <Options>yellow</Options> 
            </Select>
            <Select>
            <Options disabled selected>Size</Options>
              <Options>XS</Options>
              <Options>S</Options>
              <Options>M</Options>
              <Options>L</Options>
              <Options>XL</Options>
              <Options>XXL</Options>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
            <Options value="newest">Newest</Options>
            <Options value="asc">Price (asc)</Options>
            <Options value="desc">Price (desc)</Options>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <ProductList />
      <Newsletter />
      <Footer />
    </>
  );
};

export default AllProducts;
