import Link from "next/link"
import {  Home, Package, ShoppingCart, Users } from "lucide-react"
const Sidebar = () => {
    const adminSidebar = [
        {
            id: 1,
            name: "Dashboard",
            href: '/admin',
            icon:Home
        },
        {
            id: 2,
            name: "Products",
            href: '/admin/products',
            icon:Package
        },
        {
            id: 3,
            name: "Orders",
            href: '/admin/orders',
            icon:ShoppingCart
        },
        {
            id: 4,
            name: "Customers",
            href: '/admin/customers',
            icon:Users
        },
    ]

    return (
        <div className="bg-gray-100 w-60 p-4 h-[100vh] ">
            <h1 className="text-[20px] font-semibold py-4 border-b border-gray-400">Shoe Shop Admin</h1>
            <div className="py-4">
                {adminSidebar.map(item => (
                    <Link key={item?.id} href={item?.href} className="flex flex-row items-center  gap-2 text-[18px] py-4 px-2 text-gray-500">
                        <item.icon width={20} height={20} />
                        {item?.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar