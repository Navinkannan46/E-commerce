import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const page = () => {
    return (
        <div > 
            <div className='flex items-center gap-2 text-2xl py-4 px-2 '>
                <Link href={'/admin/products'}>
                    <ArrowLeft />
                </Link>
                Add Product
            </div>
            <div className=' my-4 p-4 grid md:grid-cols-2 gap-4'>
                {/* left */}
                <div className=' flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder='Enter Product Name' className='border border-gray-400 p-2 rounded' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Product Name</label>
                        <select name="" id="" className='border border-gray-400 p-2 rounded'>
                            <option value="" hidden>Select Category</option>
                            <option value="">Men's</option>
                            <option value="">Kids</option>
                            <option value="">Women's</option>
                        </select>
                    </div>
                    <div className='flex flex-row gap-2 '>
                        <div className='flex flex-col gap-2   w-full'>
                            <label htmlFor="">Price</label>
                            <input type="number" placeholder='0.00' className='border border-gray-400 p-2 rounded w-full' />
                        </div>
                        <div className='flex flex-col gap-2   w-full'>
                            <label htmlFor="">Discount(%)</label>
                            <input type="number" placeholder='0' className='border border-gray-400 p-2 rounded w-full' />
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 '>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Discount Price</label>
                            <input type="number" placeholder='0' className='border border-gray-400 p-2 rounded w-full' />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Stock</label>
                            <input type="number" placeholder='0' className='border border-gray-400 p-2 rounded w-full' />
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='grid grid-rows-2  '>
                    <div className=' flex flex-col gap-2 w-full'>
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" placeholder='Enter Product Description' className='w-full h-full border border-gray-400 p-2 rounded'/>
                    </div>
                    <div className=' flex flex-col gap-2 w-full'>
                        <label htmlFor="">Product Image</label>
                        <input type="file"  className='border-2 border-dashed h-full   border-gray-400 p-2 rounded w-full'/>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 justify-end'>
                <Link href={'/admin/products'} className='rounded bg-gray-200 py-2 px-3 text-black' >Cancel</Link>
                <Link href={'/admin/products'} className='rounded bg-black text-white py-2 px-3'>Add Product</Link>
            </div>
        </div>
    )
}

export default page