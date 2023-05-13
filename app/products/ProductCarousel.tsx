'use client'

import React from 'react'
import Image from 'next/image';
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

import product1Img from './assets/product-1.jpg'
import product2Img from './assets/product-2.jpg'
import product3Img from './assets/product-3.jpg'
import product4Img from './assets/product-4.jpg'

const productsArray = [
    { imgSrc: product1Img, desp: 'Antivirus' },
    { imgSrc: product2Img, desp: 'Protect Your Data' },
    { imgSrc: product3Img, desp: 'POS' },
    { imgSrc: product4Img, desp: 'Website Link' },
]

type Props = {}

export default function ProductCarousel({ }: Props) {
    return (
        <Carousel
            className="text-black mb-5 h-[80vh]"
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 -translate-y-2/4 left-4 text-dark2"
                    ripple={false}
                >
                    <ArrowLeftIcon strokeWidth={3} className="w-16 h-6" />
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 -translate-y-2/4 !right-4 text-dark2"
                    ripple={false}
                >
                    <ArrowRightIcon strokeWidth={3} className="w-16 h-6" />
                </IconButton>
            )}
        >
            {productsArray.map((product) => (
                <Image
                    key={product.desp}
                    src={product.imgSrc}
                    alt={product.desp}
                    className='md:h-[75vh] w-[200vh] text-center aspect-auto rounded-xl'
                />
            ))}
        </Carousel>
    )
}