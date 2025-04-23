'use client'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ClipboardList, Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter()


    return (

        <nav className="bg-white shadow-md w-full">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/">Shoes</Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
                    <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link href="/allProducts" className="hover:text-blue-500">Shop</Link></li>
                    <li><Link href="/" className="hover:text-blue-500">About Us</Link></li>
                    <li><Link href="/" className="hover:text-blue-500">Contact Us</Link></li>
                    
                    <li>
                        <SignedOut>
                            <div>
                                <Link href="/sign-in" className="hover:text-blue-500">Sign In</Link>
                            </div>
                        </SignedOut>
                        <SignedIn>
                            <UserButton >
                                <UserButton.MenuItems>
                                    <UserButton.Action label='Cart' labelIcon={<ShoppingCart size={16} />} onClick={() => router.push('/cart')} />
                                    <UserButton.Action label='wishlist' labelIcon={<Heart size={16} />} onClick={() => router.push('/wishlist')} />
                                    <UserButton.Action label='My Order' labelIcon={<ClipboardList  size={16} />} onClick={() => router.push('/order')} />
                                </UserButton.MenuItems>
                            </UserButton>
                        </SignedIn>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">

                    <SignedOut>
                        <div>
                            <Link href="/sign-in" className="hover:text-blue-500">Sign In</Link>
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <UserButton >
                            <UserButton.MenuItems>
                                <UserButton.Action label='Cart' labelIcon={<ShoppingCart size={16} />} onClick={() => router.push('/cart')} />
                                <UserButton.Action label='wishlist' labelIcon={<Heart size={16} />} onClick={() => router.push('/wishlist')} />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>


                </div>
            </div>

        </nav>
    )
}

export default Navbar