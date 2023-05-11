import Link from "next/link"

const navLinks = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/products', name: 'Products' }
]

export default function Navbar () {
    return (
        <div className="bg-blue-400 flex items-center justify-between py-4 px-8 font-['Poppins']">
            <div className="">
                <Link className="text-xl text-white" href={'/'}>HoneyBadgersCo</Link>
            </div>
            <div className="hidden lg:flex space-x-5 mr-12">
                {navLinks.map((link) => {
                    return (
                        <Link
                            href={link.href}
                            key={link.name}
                        >{link.name}</Link>
                    )
                })}
            </div>
        </div>
    )
}

