import React from 'react'
import Hero from '../../components/Hero'
import HomeMenu from '../../components/HomeMenu'

const Home = ({ numberInCart, setNumberInCart, productInCart, setProductInCart }) => {
  return (
    <div>
      <Hero />
      <HomeMenu numberInCart = { numberInCart } setNumberInCart = { setNumberInCart } productInCart = { productInCart } setProductInCart = { setProductInCart } />
    </div>
  )
}

export default Home