import { SignedIn, UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import React from 'react'

interface reactProps {
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ menu, setMenu }: reactProps) => {
    return (
        <div className='flex justify-between  items-center p-3 pr-10 bg-gray-400' >
            <div className='flex items-center gap-4'>
                <button onClick={() => setMenu(!menu)}>
                    <Menu />
                </button>
                <h1 className='text-[20px] font-bold'>Dashboard</h1>
            </div>
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

        </div>
    )
}

export default Header