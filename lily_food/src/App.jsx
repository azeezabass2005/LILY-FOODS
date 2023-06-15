import React, { useState } from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Menu from './pages/menu/Menu'
import Cart from './pages/cart/Cart'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import LoginSignup from './pages/login_signup/LoginSignup'

const App = () => {

  const [productInCart, setProductInCart] = useState([])
  const [numberInCart, setNumberInCart] = useState(productInCart.length)
  return (
    <BrowserRouter>
      <Navbar numberInCart={ numberInCart } />
      <Routes>
        <Route index element={<Home numberInCart = { numberInCart } setNumberInCart = { setNumberInCart } productInCart = { productInCart } setProductInCart = { setProductInCart } />}/>
        <Route path='menu' element={<Menu numberInCart = { numberInCart } setNumberInCart = { setNumberInCart } productInCart = { productInCart } setProductInCart = { setProductInCart } />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<Cart numberInCart = { numberInCart } setNumberInCart = { setNumberInCart } productInCart = { productInCart } setProductInCart = { setProductInCart } />} />
        <Route path='login_signup' element={<LoginSignup />} />
      </Routes>
      {/* <BackToTop /> */}
      <Footer />
    </BrowserRouter>

  )
}

export default App