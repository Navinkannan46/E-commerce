import Image from 'next/image'
import React from 'react'
import landingImg from '@/public/landing-img.png'

const DiscountSection = () => {
    return (
        <div className='min-h-[50vh] grid grid-col-1  sm:grid-cols-2 p-6 mt-10 bg-gray-200 gap-6 items-center'>
            <div className='flex justify-center'>
                <Image src={landingImg} alt={''} className='w-[200px] md:w-[400px]' priority />
            </div>
            <div className='sm:max-w-[500px]' >
                <h2 className='font-bold text-2xl mb-2 lg:text-5xl'>Get Your Shoes Now on <span className='text-red-500'>15%</span> Discount </h2>
                <p className='text-[14px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consectetur voluptates incidunt, possimus esse culpa laborum dolores maxime quaerat, suscipit quasi! Quae eveniet fuga quam corrupti in rerum modi eos.</p>
            </div>
        </div>
    )
}

export default DiscountSection