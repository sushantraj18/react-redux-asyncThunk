import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk } from './redux/slice'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import Cart from './pages/Cart'



function App() {
  
  return (
    <BrowserRouter> 
    <Header/>
    <Routes>
      <Route path="/" Component={Product}/>
      <Route path="/cart" Component={Cart}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    
  )
}

export default App