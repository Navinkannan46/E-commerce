'use client'
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
interface ProductsProps {
    checkout?: boolean; // Optional prop
}

const OrderSummery: React.FC<ProductsProps> = ({ checkout }) => {
    const router =useRouter()
    return (
        <div className='bg-gray-100 p-4 ml-6 sm:ml-0 max-w-[450px]  rounded'>
            <p className='text-[20px] py-2'>Order Summery</p>
            <div className='py-2 border-y border-gray-400 flex justify-between'>
                <div className='leading-10'>
                    <p className='text-[19px] '>Items 3</p>
                    <p className='text-[14px] text-gray-600'>Shiping Fee</p>
                    <p className='text-[14px] text-gray-600'>Tax (2%) </p>
                </div>
                <div className='leading-10'>
                    <p className='text-[19px]'>$555</p>
                    <p>Free</p>
                    <p>$4</p>
                </div>

            </div>
            <div className='flex justify-between pt-4'>
                <p>Total</p>
                <p>$555</p>
            </div>
            {
                checkout ?
                    <div className='flex gap-1 border border-gray-300 mt-4 p-2 rounded bg-green-100 text-green-800'>
                        <Check />
                        <p>Your order will be processed securely with end-to-end encryption.</p>
                    </div>
                    :
                    <button onClick={()=>router.push('/checkout')} className='w-full bg-orange-400 rounded p-2 mt-6'>Proceed To Chechout</button>
            }
        </div>

    )
}

export default OrderSummery