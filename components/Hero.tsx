import Image from 'next/image'
import React from 'react'
import landingImg from '../public/landing-img.png'
const Hero = () => {
    return (   
        <div className="min-h-[70vh] md:min-h-[60vh] p-5 bg-sky-50 flex flex-col justify-evenly items-center md:flex-row md:px-10">
            {/* Text Section */}
            <div className="text-center max-w-[500px] md:text-left p-5 md:p-0">
                <h3 className="text-3xl font-semibold mb-5 md:text-4xl leading-tight">GOOD SHOES TAKE YOU TO GOOD PLACES</h3>
                <p className="text-gray-700">Get shoes of the highest quality and affordable prices,do not hesitate to shop at our store,we alwas prioritize service to our customer.</p>
            </div>

            {/* Image Section */}
            <div className="max-w-md">
                <Image
                    src={landingImg} 
                    alt="Example"
                    width={500}
                    height={600}
                    priority 
                />
            </div>
        </div>
    )
}

export default Hero