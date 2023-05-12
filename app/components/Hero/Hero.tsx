import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className="min-w-full h-[80vh] flex flex-col justify-center items-center text-white bg-gradient-to-r from-light1 to-dark2">
            <h1 className="text-6xl font-bold">HONEYBADGERSCO</h1>
            <p className="my-5 text-xl font-display">PASSION. POSSIBILITIES. INNOVATIONS!</p>
            <button className="h-14 py-3 px-6 bg-black text-2xl font-display font-bold rounded-md">
                <Link href="/#about" scroll={false}>Learn More</Link>
            </button>
        </div>
    )
}
