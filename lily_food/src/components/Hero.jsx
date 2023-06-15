import React from 'react'
import { ohaLeaf, nzu, ogbono, oporo, bigSmokedFish, deal, veggies } from '../assets'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='sm:px-20 md:px-28 p-3 pt-36 sm:pt-36 lg:pt-44 md:pt-56 flex md:justify-between md:gap-[2rem] justify-center items-center lg:flex-row flex-col '>
        <div className='p-5 skew-x-[17deg] welcome font-semibold rounded-[10px] outstanding absolute top-32 left-10] italic text-[#fff]'>
          Bienvenidos!
        </div>
      <div>
        <h2 className='sm:text-[2.7rem] text-[2.5rem] text-primary-gradient font-semibold sm:leading-[65px] lg:mt-10 max-w-[560px]'>
          Your Number One Choice For African
          Indegenious Dishes in Raw Form.
        </h2>
        <p className='text-[20px] sm:text-[24px] text-[#000] leading-[38px] sm:leading-[42px] max-w-[530px] md:mt-3'>
          Welcome to Lilly Foods where we Offer varieties 
          of African soup Recipes at unimaginable prices, 
          to satisfy your cravings for local dishes.
        </p>
        <div className='flex flex-wrap sm:gap-[2rem] gap-[1rem] mt-7'>
        <button className=' sm:p-5 sm:px-9 px-7 p-4 bg-gradient text-[#fff] text-[1.3rem] rounded-[20px] outstanding'><a href="/">Order Now</a></button>
        <button className=' sm:p-5 sm:px-9 px-7 p-4 text-primary-gradient font-semibold border-[2px] border-dotted  outstanding border-[#8a2be2] text-[1.3rem] rounded-[20px]'><Link to="/menu">Products</Link></button>
        </div>
      </div>
      <div className='md:mt-0 lg:mt-10 mt-[5rem] hero-radius product-shadow sm:p-7 md:p-10 p-3 rounded-tl-[30%] rounded-br-[30%]'>
        <img src={veggies} alt="deal" className='rounded-full' />
      </div>
    </div>
  )
}

export default Hero