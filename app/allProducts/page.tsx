'use client'
import React, { useState } from 'react'
import landingImg from '../../public/landing-img.png'
import { Products } from '../../components/Products'
import Footer from '@/components/Footer'

const Page = () => {
    const [menu, setMenu] = useState("All")
    const product = [
        { id: 1, name: "Adidas", price: 1222, category: "Men", image: landingImg },
        { id: 2, name: "Nike", price: 1100, category: "Women", image: landingImg },
        { id: 3, name: "Puma", price: 950, category: "Kids", image: landingImg },
        { id: 4, name: "Reebok", price: 980, category: "Men", image: landingImg },
        { id: 5, name: "Puma", price: 950, category: "Kids", image: landingImg },
        { id: 6, name: "Reebok", price: 980, category: "Men", image: landingImg },
        { id: 7, name: "Adidas", price: 1222, category: "Men", image: landingImg },
        { id: 8, name: "Nike", price: 1100, category: "Women", image: landingImg },
        { id: 9, name: "Puma", price: 950, category: "Kids", image: landingImg },
        { id: 10, name: "Reebok", price: 980, category: "Men", image: landingImg },
        { id: 11, name: "Puma", price: 950, category: "Kids", image: landingImg },
        { id: 12, name: "Reebok", price: 980, category: "Men", image: landingImg },
        // Add more products here
    ];
    return (
        <>
            <div className='px-2 py-6'>
                <h2 className='text-center text-4xl '>All Products</h2>
                <div className='flex justify-center gap-6 my-6'>
                    <button onClick={() => setMenu("All")} className={menu === "All" ? 'bg-black text-white py-1 px-5 rounded-sm' : ""} >All</button>
                    <button onClick={() => setMenu("Men")} className={menu === "Men" ? 'bg-black text-white py-1 px-5 rounded-sm' : ""} >Men</button>
                    <button onClick={() => setMenu("Women")} className={menu === "Women" ? 'bg-black text-white py-1 px-5 rounded-sm' : ""} >Women</button>
                    <button onClick={() => setMenu("Kids")} className={menu === "Kids" ? 'bg-black text-white py-1 px-5 rounded-sm' : ""} >Kids</button>
                </div>
                <div className='flex justify-center py-6'>
                    <input type="text" placeholder='Search Products... ' className='border rounded border-gray-400 p-1 max-w-100 w-full outline-0' />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around px-8  ">
                    {product.map(res => (
                        <div key={res?.id}>
                            <Products />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page