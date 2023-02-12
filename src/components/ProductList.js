import React, { useEffect, useState } from 'react'
import styled from "styled-components"
// import { popularProducts } from '../assets/data/data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
flex: 1;
padding: 20px;
display: flex;
justify-content: space-between; 
flex-wrap: wrap;

`


const ProductList = ({categories, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect for categories

 useEffect(()=>{
  const getProducts = async ()=> {
    try{
      const res = await axios.get(categories?`http://localhost:8000/api/products?category=${categories}`:"http://localhost:8000/api/products")
      setProducts(res.data);
    }catch(e)
    {
      console.log(e)
    }
  }
  getProducts();
 }, [categories])


  // useEffect for Filters

  useEffect(()=>{

    categories && setFilteredProducts(
      products.filter((item)=>
        Object.entries(filters).every(([key, val])=> item[key].includes(val)
        )
      )
    );

  }, [products, categories, filters])

  // useEffect for sorting

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
     <Container>
        {categories ? filteredProducts.map((item)=>
            <Product item={item} key={item.id}/>
        ): products.slice(0,8).map((item)=><Product item ={item} key={item.id}/>) }
     </Container>
    </>
  )
}

export default ProductList