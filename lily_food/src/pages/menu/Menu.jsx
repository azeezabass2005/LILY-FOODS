import React from 'react'
import { products } from '../../constants'
import { Link } from 'react-router-dom'

const Menu = ({ numberInCart, setNumberInCart, productInCart, setProductInCart }) => {
  return (
    <div className='sm:px-20 md:px-28 p-3 pt-36 sm:pt-36 lg:pt-44 md:pt-56 flex md:justify-between justify-center items-center flex-col mb-10'>
      <div className='flex justify-center flex-col items-center mb-5'>
        <h2 className='sm:text-[2.8rem] text-[2.5rem] text-primary-gradient font-semibold lg:mt-10'>
          Menu
        </h2>
        <p className='text-[20px] sm:text-[24px] text-[#000] text-center'>
          Our menu of recipe for local delicacies
        </p>
      </div>
      <div>
      <div className='flex justify-center items-center flex-wrap ss:gap-[4rem] gap-[1rem]'>
            {products.map((product, index) => (
                <div key={index} id={product.name} className='bg-[#fff] product-shadow w-[90%] vs:w-[350px] flex flex-col justify-center items-center mt-5 sm:p-4 p-3 rounded-[20px] relative'>
                    <h3 className='text-[#00d888] font-semibold text-[1.3rem]'>
                        {product.name}
                    </h3>
                    <div className='sm:w-[340px] w-[80%] h-[200px] p-5 '>
                        <img src={product.img} alt={product.name} className='h-[100%] w-[100%] object-contain' />
                    </div>
                    <div className='flex'>
                      <button className='p-3 vs:pl-5 pl-3 text-[16px] text-[#fff] pr-8 cart-button origin-top-right vs:before:flex before:hidden' onClick={() => {
                          if(!productInCart.includes(product)){productInCart.push(product)}
                          product.quantity = 1
                          setProductInCart(productInCart)
                          setNumberInCart(productInCart.length)
                          console.log('product pushed to cart')
                          console.log(productInCart)
                      }}>
                          Add to cart
                      </button>
                      <Link to='/cart' className='p-3 pl-9 vs:pr-5 pr-3 order-button bg-[#fff] flex justify-center items-center vs:ml-7 ml-3 vs:before:flex before:hidden' onClick={() => {
                          if(!productInCart.includes(product)){productInCart.push(product)}
                          product.quantity = 1
                          setProductInCart(productInCart)
                          setNumberInCart(productInCart.length)
                          console.log('product pushed to cart')
                          console.log(productInCart)
                      }}>
                          Order Now
                      </Link>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Menu