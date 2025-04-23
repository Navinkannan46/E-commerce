'use client'
import OrderSummery from '@/components/OrderSummery'
import { ArrowLeft, CreditCard } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
    const router=useRouter()
    return (
        <div className='p-8'>
            <button onClick={()=>router.push('/cart')} className='flex gap-2 text-[18px] p-1 '> <ArrowLeft /><span>Back</span></button>
            <h1 className='text-4xl font-semibold py-6 '>Checkout</h1>
            <div className='grid md:grid-cols-3 gap-6 md:justify-center '>
                <div className='grid  col-span-2 gap-4'>
                    {/* Shipping Information */}
                    <div className='p-6 rounded bg-gray-50'>
                        <h2 className='mb-4 text-[18px]'>Shipping Information</h2>
                        <form className='flex flex-col gap-4'>
                            <div className='flex gap-4'>
                                <div className='flex flex-col  w-full'>
                                    <label className='mb-2' htmlFor="">Full Name</label>
                                    <input type="text" placeholder='' className='border border-gray-300 rounded p-1 w-full' />
                                </div>
                                <div className='flex flex-col  w-full' >
                                    <label className='mb-2' htmlFor="">Email Address</label>
                                    <input type="text" placeholder='' className='border border-gray-300 rounded p-1 w-full' />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex flex-col  w-full'>
                                    <label className='mb-2' htmlFor="">Street Address</label>
                                    <input type="text" placeholder='' className='border border-gray-300 rounded p-1 w-full' />
                                </div>
                                <div className='flex flex-col  w-full' >
                                    <label className='mb-2' htmlFor="">City</label>
                                    <input type="text" placeholder='' className='border border-gray-300 rounded p-1 w-full' />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex flex-col  w-full'>
                                    <label className='mb-2' htmlFor="">Postal Code</label>
                                    <input type="text" placeholder='' className='border border-gray-300 rounded p-1 w-full' />
                                </div>
                                <div className='flex flex-col  w-full' >
                                    <label className='mb-2' htmlFor="">Country</label>
                                    <input type="text" placeholder='' className='border border-gray-300 rounded p-1 w-full' />
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Payment Method */}
                    <div className='p-6 rounded bg-gray-50'>
                        <h2 className='text-[18px] mb-4'>Payment Method</h2>
                        <div className='flex gap-2 border p-2 border-gray-300 rounded mb-4'>
                            <CreditCard />
                            <p>Credit / Debit Card</p>
                        </div>
                        <form className='flex flex-col gap-4'>
                            <div className='flex flex-col '>
                                <label className='mb-2' htmlFor="">Card Number</label>
                                <input type="text" placeholder='1234 5678 9012 3456' className='border border-gray-300 rounded p-1 w-full ' />
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex flex-col w-full'>
                                    <label className='mb-2' htmlFor="">Expiry Date</label>
                                    <input type="text" placeholder='MM/YY' className='border border-gray-300 rounded p-1  w-full' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label className='mb-2' htmlFor="">CVC</label>
                                    <input type="text" placeholder='123' className='border border-gray-300 rounded p-1  w-full' />
                                </div>
                            </div>
                        </form>
                        <button className=' w-full text-center p-2 mt-6 rounded bg-orange-400 md:max-w-[200px] '>Place Order</button>
                    </div>
                </div>
                {/* OrderSummery */}
                <div className=''>
                    <OrderSummery checkout={true} />
                </div>
            </div>
        </div>
    )
}

export default page