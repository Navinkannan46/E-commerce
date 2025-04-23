import Image from 'next/image'
import React from 'react'
import landingImg from '../../../public/landing-img.png'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl'>Products</h2>
        <Link className='bg-black rounded text-white py-2 px-3' href={'/admin/products/add-product'}><span>+</span> Add Product</Link>
      </div>
      <div className='my-6'>
        <input type="text" placeholder='Search Products...' className='outline-0 border border-gray-200 py-2 px-3 rounded max-w-[500px]' />
      </div>
      <table className=' w-full  rounded'>
        <thead>
          <tr className='border border-gray-400 '>
            <th className=" p-4">Image</th>
            <th className=" p-4">Name</th>
            <th className=" p-4">Category</th>
            <th className="max-w-[70px] p-4">Price</th>
            <th className=" p-4">Stock</th>
            <th className=" p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border border-gray-400'>
            <td className='w-[80px] p-4'>
              <Image src={landingImg} alt={'Product image'} width={50} className='object-cover' />
            </td>
            <td className=" p-4 ">sdfdsf</td>
            <td className=" p-4 ">sadds</td>
            <td className=" p-4 max-w-[80px]">$555</td>
            <td className=" p-4 ">5</td>
            <td className='p-4 w-[200px] '>
              <Link href='/admin/products/edit-products/1' className='bg-gray-100 py-2 px-4 rounded mr-3'>Edit</Link>
              <button className='bg-gray-100 py-2 px-4 rounded '>Delete</button>
            </td>
          </tr>
          <tr className='border border-gray-400'>
            <td className='w-[80px] p-4'>
              <Image src={landingImg} alt={''} width={50} className='object-cover' />
            </td>
            <td className=" p-4 ">sdfdsf</td>
            <td className=" p-4 ">sadds</td>
            <td className=" p-4 max-w-[80px]">$555</td>
            <td className=" p-4 ">5</td>
            <td className='p-4 w-[200px] '>
              <Link href='/admin/products/edit-products/1' className='bg-gray-100 py-2 px-4 rounded mr-3'>Edit</Link>
              <button className='bg-gray-100 py-2 px-4 rounded '>Delete</button>
            </td>
          </tr>
          <tr className='border border-gray-400'>
            <td className='w-[80px] p-4'>
              <Image src={landingImg} alt={''} width={50} className='object-cover' />
            </td>
            <td className=" p-4 ">sdfdsf</td>
            <td className=" p-4 ">sadds</td>
            <td className=" p-4 max-w-[80px]">$555</td>
            <td className=" p-4 ">5</td>
            <td className='p-4 w-[200px] '>
              <Link href='/admin/products/edit-products/1' className='bg-gray-100 py-2 px-4 rounded mr-3' >Edit</Link>
              <button className='bg-gray-100 py-2 px-4 rounded '>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Page