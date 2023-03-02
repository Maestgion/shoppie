import React from "react";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { publicReq } from "../assets/axios/reqMethod";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  gap: 50px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  font-weight: 200;
  text-align: justify;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 5vh;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

const Filter = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
`;

const FilterSize = styled.select`
  padding: 5px;
`;

const FilterSizeOptions = styled.option``;

const CartContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Quantity = styled.option`
  border: 1px solid teal;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: 3px solid teal;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: teal;
    color: white;
    transition: all 0.5s ease;
  }
`;

const SingleProduct = () => {
  const location = useLocation();
  const prodId = location.pathname.split("/")[2];
  // console.log(prodId)

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => setQuantity(quantity + 1);
  const handleRemove = () => setQuantity(quantity - 1);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await publicReq.get("/products/find/" + prodId);

        setProduct(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getSingleProduct();
  }, [prodId]);

  const addToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <>
      <Navbar />
      <Announcements />
      <Container>
        <Wrapper>
          <ImageContainer>
            <Image src={product.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>
              Rs. {quantity === 1 ? product.price : quantity * product.price}
            </Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>

                <FilterSize onChange={(e) => setColor(e.target.value)}>
                  {product.color?.map((clr) => (
                    <FilterSizeOptions key={clr}>{clr}</FilterSizeOptions>
                  ))}
                </FilterSize>
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((sz) => (
                    <FilterSizeOptions key={sz}>{sz}</FilterSizeOptions>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <CartContainer>
              <QuantityContainer>
                <Remove style={{ cursor: "pointer" }} onClick={handleRemove} />
                <Quantity>{quantity < 1 ? setQuantity(1) : quantity}</Quantity>
                <Add style={{ cursor: "pointer" }} onClick={handleAdd} />
              </QuantityContainer>
              <Button onClick={addToCart}>ADD TO CART</Button>
            </CartContainer>
          </InfoContainer>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SingleProduct;
