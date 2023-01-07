import React from 'react'
import styled from "styled-components"
import { popularProducts } from '../assets/data/data'
import Product from './Product'

const Container = styled.div`
flex: 1;
padding: 20px;
display: flex;
justify-content: space-between; 
flex-wrap: wrap;

`


const ProductList = () => {
  return (
    <>
     <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
     </Container>
    </>
  )
}

export default ProductList