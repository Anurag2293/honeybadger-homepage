'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai'

const navLinks = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/products', name: 'Products' },
    { href: '/contact', name: 'Contact Us' },
]

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="bg-[#146C94] flex items-center justify-between lg:py-4 lg:px-8 font-display">
            <div className="">
                <Link className="text-2xl text-white" href={'/'}>HoneyBadgersCo</Link>
            </div>
            <div>
                <button className="bg-blue-500 px-2 py-1 rounded-lg lg:hidden">
                    <AiOutlineMenu size='1.75rem' color="white" />
                </button>
                <div className="hidden text-lg text-white lg:flex lg:space-x-5 lg:mr-64">
                    {navLinks.map((link) => {
                        // Compares the Current Path and Link Path
                        const isActive = (pathname === link.href);

                        return (
                            <Link
                                className={isActive ? 'text-light1' : 'text-white'}
                                href={link.href}
                                key={link.name}
                            >{link.name}</Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

