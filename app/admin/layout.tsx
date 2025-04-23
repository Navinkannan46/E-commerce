'use client'
import Header from "@/components/admin/Header"
import Sidebar from "@/components/admin/Sidebar"
import { MyContext } from "@/contextApi/ContextApi"
import { useContext, type ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  const context = useContext(MyContext)
  if (!context) throw new Error("AdminLayout must be used within a MenuContext provider")
  const { menu, setMenu } = context
  return (
    <div className="flex ">
      {
        menu ?
          <Sidebar />
          :
          <></>
      }
      <div className="flex-1">
        <Header menu={menu} setMenu={setMenu} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}