
const page = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl'>Orders</h2>
      </div>
      <div className='my-6'>
        <input type="text" placeholder='Search Orders...' className='outline-0 border border-gray-200 py-2 px-3 rounded max-w-[500px]' />
      </div>
      <table className=' w-full  rounded'>
        <thead>
          <tr className='border border-gray-300 '>
            <td className=" p-4">Order ID</td>
            <td className=" p-4">Customer</td>
            <td className=" p-4">email</td>
            <td className=" p-4">Date</td>
            <td className=" p-4">Status</td>
            <td className="max-w-[70px] p-4">Items</td>
            <td className=" p-4">Total</td>
            <td className=" p-4">Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr className='border border-gray-300'>
            <td className='w-[80px] p-4'>id</td>
            <td className='w-[80px] p-4'>ee</td>
            <td className='w-[80px] p-4'>@gmail</td>
            <td className=" p-4 ">sdfdsf</td>
            <td className=" p-4 ">sadds</td>
            <td className=" p-4 max-w-[80px]">$555</td>
            <td className=" p-4 ">5</td>
            <td className='p-4 w-[200px] '>
              <button className='bg-gray-100 py-2 px-4 rounded '>View</button>
            </td>
          </tr>
          <tr className='border border-gray-300'>
            <td className='w-[80px] p-4'>id</td>
            <td className='w-[80px] p-4'>ee</td>
            <td className='w-[80px] p-4'>@gmail</td>
            <td className=" p-4 ">sdfdsf</td>
            <td className=" p-4 ">sadds</td>
            <td className=" p-4 max-w-[80px]">$555</td>
            <td className=" p-4 ">5</td>
            <td className='p-4 w-[200px] '>
              <button className='bg-gray-100 py-2 px-4 rounded '>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default page