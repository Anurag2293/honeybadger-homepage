import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className="min-w-full px-20 text-white font-display">
            <h1 className='text-4xl my-5 text-center'>About Us</h1>
            <p className='tracking-wider'>{`HoneyBadgers is a technology and digital IT Consultation firm specializing in innovative software solutions. Which is Known for delivering high-quality and exceptional customer service. We believe that technology has the power to change the world, and we/'re driven to play a role in shaping its future. Whether it's making it easier for people to connect or improving how businesses operate, our goal is to use technology to positively impact people's lives. `}
            </p>
            <br />
            <p className='tracking-wider'>{`Our team of experts is dedicated to staying ahead of the curve in terms of technology and innovation and is persistently researching and developing new solutions to meet the ever-changing needs of our clients. Whether it's developing a custom software solution or launching a new high-tech product, we always strive to push the boundaries of what's possible. With a team of experts, a commitment to excellence, and a passion for innovation, we're poised to continue leading the way in the tech industry for many years to come.`}</p>
            <p className='my-5 font-extrabold text-2xl text-center text-light1'>YOUR DREAMS, OUR INNOVATIONS. TRANSFORMING TOGETHER FOR A BETTER FUTURE!</p>
            <h3 className='text-xl font-bold underline'>Vision:</h3>
            <p className='mb-4'>To meet the ever-evolving needs of the world by providing innovative, faster, more productive, and more secure solutions for their pressing business problems and help improve their business performance.</p>
            <h3 className='text-xl font-bold underline'>Mission:</h3>
            <p className='mb-4'>To constantly keep researching and developing new, innovative, and digital solutions for our clients.</p>
            <h3 className='text-xl font-bold underline'>Core Values:</h3>
            <p className='mb-4'>Our values sculpt the culture of our organization and define who we are, and trust and respect are integral parts of it.</p>
            <div className='mb-4'>Other values that shape who we are include:
                <ul className='list-disc ml-4'>
                    <li>Commitment to our clients</li>
                    <li>Dedication towards research, innovation, and transformation</li>
                    <li>Delivering excellence in every service we provide</li>
                    <li>Teamwork, allowing us to be meticulous and innovative.</li>
                </ul>
            </div>
        </div>
    )
}