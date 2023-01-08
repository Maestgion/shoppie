import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
        <div>
          <Announcements/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <ProductList/>
            <Newsletter/>
            <Footer/>
        </div>
    </>
  )
}

export default Home