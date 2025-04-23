'use client'
import Image from 'next/image';
import { useState } from 'react'
import landingImg from '../../public/landing-img.png'
import { Trash } from 'lucide-react';
import OrderSummery from '../../components/OrderSummery';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter()


    return (

        <div className='grid grid-cols-1 sm:grid-cols-3 p-6 '>
            {/* details */}
            <div className='p-6 col-span-2'>
                <div className='flex justify-between w-full border-b-1 border-gray-400 p-4'>
                    <h1 className='text-2xl'>Your <span className='text-yellow-400'>Cart</span></h1>
                    <p className='font-bold'>1 Items</p>
                </div>
                <div className='flex justify-between p-4 border-b-1 border-gray-400'>
                    {/* left */}

                    <div className=' flex gap-4 items-center p-2 '>
                        <Image src={landingImg} width={100} height={100} alt={''} className='border bg-gray-300 rounded' />
                        <div className='leading-8'>
                            <p className='text-[20px] '>adidas</p>
                            <p className='text-gray-500'>$444</p>
                        </div>
                    </div>

                    {/* right */}
                    <div className='flex flex-col justify-evenly '>
                        <div className='border flex justify-center items-center px-4 rounded border-gray-400'>
                            <button className='px-2 text-2xl'>-</button>
                            <span className='px-2'>2</span>
                            <button className='px-2 text-2xl'>+</button>
                        </div>
                        <div className='flex justify-between p-2'>
                            <span>$444</span>
                            <Trash className='text-gray-500 text-[12px]' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center p-4 rounded bg-gray-100 mt-4'>
                    <button onClick={() => router.push('/')} className='flex items-center text-orange-400 text-[10px] sm:text-[16px]'><span className='text-2xl inline-flex'><IoIosArrowRoundBack /></span>
                        Continue Shopping</button>
                </div>
            </div>
            {/* order */}
            <div>
                <OrderSummery />
            </div>
        </div>


    )
}

export default Page