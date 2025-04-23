import Image from 'next/image'
import React from 'react'
import landingImg from '../../../public/landing-img.png'
import { IoMdStar } from "react-icons/io"; import { Heart, ShoppingCart } from 'lucide-react';
const page = () => {
  
  return (
    <div className='grid grid-cols-1 p-10 md:grid-cols-2 gap-10 xl:mt-10'>
      <div className='bg-gray-300 rounded-sm relative'>
        <Image src={landingImg} alt={''} className='m-auto' />
        <div className='absolute right-6 top-6 rounded-4xl p-1.5 bg-gray-400 '>
          <Heart className='size-4 ' />
        </div>
      </div>

      <div className='leading-7'>
        <h2 className='font-bold text-4xl'>adidas</h2>
        <p className='text-gray-600 py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam praesentium rerum odit deserunt repudiandae magnam consectetur, tempore esse beatae harum doloribus, neque non</p>
        <span className='text-green-600 font-semibold'>Special price</span>
        <p className='my-1'>
          <span className='text-black text-[20px] font-semibold lg:mb-2'>₹480</span>  <span className='text-gray-400 line-through'>₹12222</span> <span className='text-green-600 font-semibold'>75% off</span>
        </p>
        <div className='lg:my-3'>
          <span className='bg-green-600 inline-flex items-center gap-1 py-1 px-2 rounded-md '>
            9.5
            <IoMdStar />
          </span>
        </div>
        <span className='my-1'>size</span>
        <ul className='flex gap-2 lg:mt-2'>
          <li className='bg-gray-300  px-2 py-1 rounded '>XS</li>
          <li className='bg-gray-300  px-2 py-1 rounded'>S</li>
          <li className='bg-gray-300  px-2 py-1 rounded'>M</li>
          <li className='bg-gray-300  px-2 py-1 rounded'>L</li>
          <li className='bg-gray-300  px-2 py-1 rounded'>XL</li>
        </ul>
        <div className='flex mt-10 gap-8'>
          <button className='flex gap-2 flex-1  p-2 rounded justify-center text-[18px] bg-gray-200'><ShoppingCart /><span> Add To Cart</span></button>
          <button className=' flex-1 p-2 rounded text-center bg-blue-600 text-white'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default page