import Image from "next/image"
import landingImg from '../../public/landing-img.png'

const page = () => {
    return (
        <div className=" py-10 px-30 ">
            <h1 className="text-3xl  py-6 mb-4">My Order</h1>
           <div className="border-t  border-gray-400">
                <div className="border-b border-gray-400 py-6 px-4  grid grid-cols-4 items-center ">
                    <div className="flex items-center gap-4">
                        <Image src={landingImg} alt={""} width={60}/>
                      <div className="flex flex-col gap-2">
                            <p>ddd</p>
                            <p>items:2</p>
                      </div>
                    </div>
                    <div>
                        <p className="text-[22px]">address</p>
                    </div>
                    <div>
                        <p className="text-[18px]">$4444</p>
                    </div>
                    <div>
                        <p className="text-[18px]">Date</p>
                        <p className="text-[18px]">Payment</p>
                    </div>
                </div>
                <div className="border-b  border-gray-400 py-6 px-4  grid grid-cols-4 items-center ">
                    <div className="flex items-center gap-4">
                        <Image src={landingImg} alt={""} width={60}/>
                      <div className="flex flex-col gap-2">
                            <p>ddd</p>
                            <p>items:2</p>
                      </div>
                    </div>
                    <div>
                        <p className="text-[22px]">address</p>
                    </div>
                    <div>
                        <p className="text-[18px]">$4444</p>
                    </div>
                    <div>
                        <p className="text-[18px]">Date</p>
                        <p className="text-[18px]">Payment</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default page