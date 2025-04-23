'use client'
import React, { createContext, ReactNode, useState } from 'react'
interface MenuContextType {
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}
export const MyContext = createContext<MenuContextType | undefined>(undefined)
const ContextApi = ({ children }: { children: ReactNode }) => {
    const [menu, setMenu] = useState<boolean>(false)
    return (
        <MyContext.Provider value={{ menu, setMenu }}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextApi