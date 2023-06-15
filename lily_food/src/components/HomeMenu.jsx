import React from 'react'
import { products } from '../constants'
import { Link } from 'react-router-dom'

const HomeMenu = ({ numberInCart, setNumberInCart, productInCart, setProductInCart }) => {
    const tenProducts = products.slice(0, 6)

  return (
    <div className={`pt-20 flex flex-col justify-center items-center`}>
        <div>
            <h3 className='text-primary-gradient text-[22px] text-center sm:mb-6 mb-4'>
                Our Products
            </h3>
            <h2 className='sm:text-[2.8rem] text-[2.5rem] text-primary-gradient font-semibold sm:leading-[65px] text-center vs:mb-8 sm:mb-14 mb-4'>
                Choose from our large store of recipes
            </h2>
        </div>
        <div className='flex justify-center items-center flex-wrap vs:gap-[4rem] gap-[2rem]'>
            {tenProducts.map((product, index) => (
                <div key={index} className='bg-[#fff] product-shadow w-[90%] vs:w-[350px] flex flex-col justify-center items-center mt-5 sm:p-4 p-3 rounded-[20px] relative'>
                    <h3 className='text-[#8a2be2] font-semibold text-[1.3rem]'>
                        {product.name}
                    </h3>
                    <div className='sm:w-[340px] w-[80%] h-[200px] p-5 '>
                        <img src={product.img} alt={product.name} className='h-[100%] w-[100%] object-contain' />
                    </div>
                    <div className='flex'>
                        <button className='p-3 vs:pl-5 pl-3 text-[16px] text-[#fff] pr-8 vs:before:flex before:hidden cart-button origin-top-right' onClick={() => {
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
        <div className='flex flex-wrap sm:justify-around justify-center items-center gap-[2rem] bg-[#ccaaff] vs:w-[85%] sm:w-[80%] w-[90%] mt-7 mb-4 p-5 sm:p-8 rounded-[10px]'>
            <h3 className='sm:text-[30px] text-[24px] text-[#000]'>
                Can&apos;t find what you are looking for? 
            </h3>
            <button className='w-[200px] sm:p-7 p-4 bg-[#8a2be2] rounded-[10px] text-[#fff] text-[1.3rem]'>
                <Link to='/menu'>
                    See more
                </Link>
            </button>
        </div>
    </div>
  )
}

export default HomeMenu