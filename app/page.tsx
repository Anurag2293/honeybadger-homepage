import Image from "next/image"

import AchieveCard from "./components/AchieveCard"
import Hero from "./components/Hero"

import softwareImg from './assets/image1.jpg'

const achievementsInfo = [
	{ heading: 'PROJECTS', work: 'Our company is constantly aiming on acquiring good projects and provide value to the customers, we have a brilliant team to assist in making it happen.' },
	{ heading: 'QUALITY', work: 'HoneyBadgers believes in delivering quality in its work and be the best amoung the competitors. The company is focused on providing value to every customer.' },
	{ heading: 'NETWORK', work: 'We believe in Networking more than on one time customers, Our company is always looking for networking opportunities and are always open for partnering with enthusiasts.' },
]

export default function Home() {
	return (
		<main className="">
			<Hero />
			<div className="min-w-full flex items-center justify-between py-10 px-20">
				{achievementsInfo.map(({ heading, work }) => (
					<AchieveCard key={heading} heading={heading} work={work} />
				))}
			</div>
			<div id="about" className="flex items-center justify-around mx-24 mb-10 px-5 py-5 font-display bg-light2 border-black border-[1px]  rounded-md">
				<Image
					src={softwareImg}
					alt="Software Image"
					className="rounded-lg"
					width={500}
					height={500}
				/>
				<div className="flex flex-col justify-between items-center h-64 px-40" >
					<h1 className="underline font-bold text-3xl font-display ">What we do?</h1>
					<p>
						We are a technology and digital IT Consultation firm specializing in innovative software solutions.
						We deliver high-quality and exceptional customer service.
						We believe that technology has the power to change the world, and we're driven to play a role in shaping its future.
						Whether it's making it easier for people to connect or improving how businesses operate, our goal is to use technology to positively impact people's lives.
					</p>
				</div>
			</div>
			<div className="min-w-full h-12 text-white flex items-center justify-center bg-dark1 mb-5">
				<h1 className="text-lg font-display">Copyright © <span className="text-light1">HoneyBadgersCo Pvt Ltd</span></h1>
			</div>
		</main>
	)
}
