import React from 'react'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import AllProducts from './pages/AllProducts'
import SingleProduct from './pages/SingleProduct'
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
    
    <BrowserRouter>

      <Routes>
        <Route
        path='/'
        element={<Home/>}
        />
      </Routes>

      <Routes>
        <Route
        path='/products/:category'
        element={<AllProducts/>}
        />
      </Routes>

      <Routes>
        <Route
        path='/product/:id'
        element={<SingleProduct/>}
        />
      </Routes>

      <Routes>
        <Route
        path='/cart'
        element={<Cart/>}
        />
      </Routes>
    
  

    </BrowserRouter>
    </>
  )
}

export default App