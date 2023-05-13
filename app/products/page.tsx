import React from 'react'
import Carousel from './ProductCarousel'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className="min-w-full px-20 text-white font-display">
            <h1 className='text-4xl my-5 text-center'>Our Products</h1>
            <Carousel />
        </div>
    )
}