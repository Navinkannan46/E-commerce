"use client"
import React from 'react'
import { Products } from './Products'
import { useRouter } from 'next/navigation';
type ProductType = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    wishlist?: boolean;
};

const ProductCategory = () => {
    const router = useRouter()

    const products: ProductType[] = [
        { id: 1, name: "Adidas", price: 1222, category: "Men", image: "/landing-img.png" },
        { id: 2, name: "Nike", price: 1100, category: "Women", image: "/landing-img.png" },
        { id: 3, name: "Puma", price: 950, category: "Kids", image: "/landing-img.png" },
        { id: 4, name: "Reebok", price: 980, category: "Men", image: "/landing-img.png" },
        { id: 5, name: "Puma", price: 950, category: "Kids", image: "/landing-img.png" },
        { id: 6, name: "Reebok", price: 980, category: "Men", image: "/landing-img.png" },
        { id: 7, name: "Adidas", price: 1222, category: "Men", image: "/landing-img.png" },
        { id: 8, name: "Nike", price: 1100, category: "Women", image: "/landing-img.png" },
        { id: 9, name: "Puma", price: 950, category: "Kids", image: "/landing-img.png" },
        { id: 10, name: "Reebok", price: 980, category: "Men", image: "/landing-img.png" },
        { id: 11, name: "Puma", price: 950, category: "Kids", image: "/landing-img.png" },
        { id: 12, name: "Reebok", price: 980, category: "Men", image: "/landing-img.png" },
        // Add more products here
    ];
    return (
        <div onClick={()=>router.push('/products/1')}>
            <h2 className='text-center my-2 text-2xl p-2 font-semibold'>Featuerd Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around px-8 ">
                {products.map((item) => (
                    <div key={item.id} >
                        <Products />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCategory