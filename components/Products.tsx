import Image from 'next/image'
import React from 'react'
import landingImg from '../public/landing-img.png'
import Link from 'next/link'
import { Heart, ShoppingCart, Trash } from 'lucide-react'
interface ProductsProps {
    wishlist?: boolean; // Optional prop
}
export const Products: React.FC<ProductsProps> = ({ wishlist }) => {
    return (

        <div className=" bg-gray-100 p-3 rounded leading-9 relative">
            <div className='absolute right-6 top-6 rounded-4xl p-1.5 bg-gray-400 '>
                    <Heart className='size-4 '/>
            </div>
            <div className='flex justify-center bg-amber-50 mb-2'>
                <Image src={landingImg} alt={''} width={200} priority />
            </div>
            <h1 className="text-[18px] font-bold ">Adidas</h1>
            <div className='flex justify-between pr-2 items-center '>
                <p className="text-gray-600">$1222</p>
                {
                    wishlist &&
                    <button>
                        <Trash width={20} className='text-gray-500 ' />
                    </button>
                }
            </div>
            <div className='flex gap-2 justify-evenly sm:text-[14px] md:text-sm '>
                <button className='flex gap-1 p-1 items-center text-white justify-center bg-violet-500 w-full rounded'><ShoppingCart className='w-[20px]' /> ADD To Cart</button>
                {wishlist ?
                    <></>
                    :
                    <Link href={''} className='  bg-amber-100 p-1 w-full text-center rounded'>Buy Now</Link>
                }
            </div>
        </div>

    )
}
