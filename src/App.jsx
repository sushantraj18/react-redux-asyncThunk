import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App