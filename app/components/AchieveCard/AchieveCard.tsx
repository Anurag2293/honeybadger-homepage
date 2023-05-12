import React from 'react'

export default function AchieveCard({ 
    work, 
    heading }: {
    work: string,
    heading: string
}) {
    return (
        <div className='font-display bg-light2 max-w-md mx-3  border-black border-[0.5px] rounded-md p-6'>
            <h1 className='font-bold text-xl text-center underline'>{heading}</h1>
            <p className='text-center mt-5'>{work}</p>
        </div>
    )
}
