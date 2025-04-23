import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-2 p-10 gap-x-10 bg-black sm:grid-cols-4 sm:justify-items-center'>
      <div >
        <h2 className='font-bold text-[20px] text-white'>Shoes</h2>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, maxime ipsa? Sequi quis nihil praesentium ad velit nulla ut provident, repellendus accusamus ullam!</p>

      </div>
      <div>
        <h2 className='font-bold text-[20px] text-white'>Get Help</h2>
        <ul className='text-gray-500'>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Return Policy</li>
          <li>Payment Policy</li>
        </ul>
      </div>
      <div>
        <h2 className='font-bold text-[20px] text-white'>Our Services</h2>
        <ul className='text-gray-500'>
          <li>Features</li>
          <li>Gallery</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <h2 className='font-bold text-[20px] text-white'>Contact</h2>
        <ul className='text-gray-500'>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer