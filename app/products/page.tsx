import React from 'react'
import Image from 'next/image'

import product1Img from './assets/product-1.jpg'
import product2Img from './assets/product-2.jpg'
import product3Img from './assets/product-3.jpg'

import Carousel from './Carousel'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className="min-w-full px-20 text-white font-display">
            <h1 className='text-4xl my-5 text-center'>Our Products</h1>
            <div className='my-5'>
                <Image
                    src={product1Img}
                    alt='Product 1'
                />
            </div>
            <div className='my-5'>
                <Image
                    src={product2Img}
                    alt='Product 2'
                />
            </div>
            <div className='my-5'>
                <Image
                    src={product3Img}
                    alt='Product 3'
                />
            </div>
            <Carousel />
        </div>
    )
}